import React, { useState } from "react";
import ArticlesAndInterviewsGrid from "./../../_general/ArticlesAndInterviewsGrid";
import { useEffect } from "react/cjs/react.development";

import "../../../styles/articles/articles_lower_sec.css"

import ArticlesAndInterviewsDataObj from "../../_general/helpers/articles_and_interviews_data_constructor";
import SortingComp from "../../_general/SortingComp";

function ArticlesLowerSection() {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (let i = 0; i < 30; i++) {
      tempData.push(
        new ArticlesAndInterviewsDataObj(
          "0*ndy6ybdngG_h48BA",
          "An Interview with the International Dance Team of Sri Lanka",
          "Jan 13, 2020",
          "https://www.google.com/"
        )
      );
    }
    setArticlesData(tempData);
  }, []);

  return (
    <div className="articles-lower-section-primary-wrapper">
      <ArticlesAndInterviewsGrid inputData={articlesData} />
    </div>
  );
}

export default ArticlesLowerSection;
