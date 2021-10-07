import React, { useState } from "react";
import ArticlesAndInterviewsGrid from "./../../_general/ArticlesAndInterviewsGrid";
import { useEffect } from "react/cjs/react.development";

import ArticlesAndInterviewsDataObj from "../../_general/helpers/articles_and_interviews_data_constructor";

function ArticlesLowerSection() {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (let i = 0; i < 10; i++) {
      tempData.push(
        new ArticlesAndInterviewsDataObj(
          "0*ndy6ybdngG_h48BA",
          "An Interview with the International Dance Team of Sri Lanka",
          "Jan 13, 2020",
          "https://medium.com/@KonradDaWo/how-to-display-medium-posts-on-a-website-with-plain-vanilla-js-basic-api-usage-example-865507848c2"
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
