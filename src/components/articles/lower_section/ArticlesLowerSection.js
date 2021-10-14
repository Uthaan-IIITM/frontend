import React from "react";

import ArticlesAndInterviewsLowerSection from "../../_general/ArticlesAndInterviewsLowerSection";
import SecondaryFooter from "../../_general/footer/SecondaryFooter";
import { articles } from "./../../../services/articles.service copy";

function ArticlesLowerSection() {
  return (
    <>
      <ArticlesAndInterviewsLowerSection dataSrcFun={articles} />
      <SecondaryFooter />
    </>
  );
}

export default ArticlesLowerSection;
