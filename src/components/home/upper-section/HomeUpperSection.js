import React from 'react'
import ElementsSlider from './ElementsSlider'
import BridgingGapBetweenJuniorsAndSeniors from './illustration-components/BridgingGapBetweenJuniorsAndSeniors';
import ToSeekToFindNotToYield from './illustration-components/ToSeekToFindNotToYield';
import PushingBoundariesOnOurIdeasAndOurCraft from './illustration-components/PushingBoundariesOnOurIdeasAndOurCraft';

function HomeUpperSection() {
    return (
        <div>
            <ElementsSlider sliderComponents={[{ BridgingGapBetweenJuniorsAndSeniors },
            { ToSeekToFindNotToYield },
            { PushingBoundariesOnOurIdeasAndOurCraft }]} />
        </div>
    )
}

export default HomeUpperSection
