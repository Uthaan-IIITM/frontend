import React from "react";

import ArticlesAndInterviewsLowerSection from "../../_general/ArticlesAndInterviewsLowerSection";
import SecondaryFooter from "../../_general/footer/SecondaryFooter";
import { interviews } from "./../../../services/interviews.service";

function InterviewsLowerSection() {
  return (
    <>
      <ArticlesAndInterviewsLowerSection dataSrcFun={interviews} />
      <SecondaryFooter />
    </>
  );
}

export default InterviewsLowerSection;
