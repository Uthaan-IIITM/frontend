function smoothScroll(scrollParams) {
    const elementToScroll = scrollParams.element;
    const isWindow = elementToScroll === window;
    const scrollDirectionProp = isWindow ? 'scrollX' : 'scrollLeft';
    const elementWidthProp = isWindow ? 'innerWidth' : 'clientWidth';
    const scrollLengthProp = 'scrollWidth';
    const initialScrollPosition = elementToScroll[scrollDirectionProp];
    let totalScroll = getTotalScroll({
      isWindow,
      elementToScroll,
      elementWidthProp,
      initialScrollPosition,
      scrollLengthProp
    });
    
    let startTime;
    const { 
      easingPreset, 
      cubizBezierPoints, 
      duration,
      onAnimationCompleteCallback,
      onRefUpdateCallback
    } = scrollParams;
    
    // the tick function
    const scrollOnNextTick = (timestamp) => {
      // runTime is the number of milliseconds elapsed since the start of the animation
      const runTime = timestamp - startTime;
      
      // get the animation progress percentage ( >= 0 && <= 1)
      const progress = getProgress({
        easingPreset, 
        cubicBezierPoints,
        runTime,
        duration
      });
  
      // amount to be scrolled for this tick
      const scrollAmt = progress * totalScroll;
      
      // calculate the final scroll position of the element
      const scrollToForThisTick = scrollAmt + initialScrollPosition;
  
      // the duration is not over
      if (runTime < duration) {
        if (isWindow) {
          const xScrollTo = scrollToForThisTick;
          window.scrollTo(xScrollTo, yScrollTo);
        } else {
          scrollableDomEle[scrollDirectionProp] = scrollToForThisTick;        
        }
        
        // if a callback is supplied that should be called on each tick, call it. requestAnimationFrame(scrollOnNextTick) is      passed as an argument and can be used to cancel the animation anytime. If a callback is not supplied, call the tick function again recursively.
        if (onRefUpdateCallback) {
          onRefUpdateCallback(requestAnimationFrame(scrollOnNextTick));
        } else {
          requestAnimationFrame(scrollOnNextTick);
        }
      } else if (onAnimationCompleteCallback) {
        // fire the completion callback, if supplied, on completion of the animation
        onAnimationCompleteCallback();
      }
    }
  
  
    // calling the tick function for the first time
    requestAnimationFrame((timestamp) => {
      // timestamp is the amount of milliseconds elapsed since 01/01/1970
      startTime = timestamp;
      scrollOnNextTick(timestamp);
    });
    
  }

  export default smoothScroll;