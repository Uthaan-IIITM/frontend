import React, { useRef, useEffect } from "react";

import "../../../styles/_general/popup/popup.css";

function PopUp({ ContentComp, isOpen, closeFun, isClosable = true }) {
  const primaryWrapperRef = useRef(123);
  const timeOutRef = useRef(1234);

  useEffect(() => {
    if (isOpen) {
      primaryWrapperRef.current.style.display = "flex";
      setTimeout(() => {
        primaryWrapperRef.current.style.opacity = 1;
        primaryWrapperRef.current.style.pointerEvents = "all";

        primaryWrapperRef.current.childNodes[0].style.transform = "scale(1)";
        primaryWrapperRef.current.childNodes[0].style.opacity = 1;
      }, 10);
    } else {
      primaryWrapperRef.current.style.opacity = 0;
      primaryWrapperRef.current.childNodes[0].style.transform = "scale(0.7)";
      primaryWrapperRef.current.childNodes[0].style.opacity = 0.5;

      clearTimeout(timeOutRef.current);
      timeOutRef.current = setTimeout(() => {
        primaryWrapperRef.current.style.display = "none";
        primaryWrapperRef.current.style.pointerEvents = "none";
      }, 250);
    }
    document.body.addEventListener("keydown", function (e) {
      if (!isOpen) {
        return;
      }
      if (e.key == "Escape") {
        if (isClosable && closeFun) {
          closeFun();
        }
      }
    });
  }, [isOpen]);

  useEffect(() => {
    document.body.addEventListener("keydown", function (e) {
      if (isOpen) {
        if (e.key == "Escape") {
          if (isClosable && closeFun) {
            closeFun();
          }
        }
      }
    });
  }, []);

  return (
    <div
      className="popup-primary-wrapper"
      ref={primaryWrapperRef}
      onClick={(e) => {
        if (isClosable && e.target === primaryWrapperRef.current && closeFun) {
          closeFun();
        }
      }}
    >
      <div className="popup-primary-content-container">
        {ContentComp ? ContentComp : null}
      </div>
    </div>
  );
}

export default PopUp;
