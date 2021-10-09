import React, { useState } from "react";
import ArticlesAndInterviewsGrid from "./../../_general/ArticlesAndInterviewsGrid";
import { useEffect } from "react/cjs/react.development";

import "../../../styles/_general/articles_and_interviews_lower_sec.css";

import ArticlesAndInterviewsDataObj from "../../_general/helpers/articles_and_interviews_data_constructor";
import SortingComp from "../../_general/SortingComp";

import convertTsToDate from "../../_general/helpers/dateConverter";
import sortDataBy from "../../_general/helpers/articles_and_interviews_sorter";

function ArticlesLowerSection() {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(async () => {
    let tempData = [];
    for (let i = 0; i < 30; i++) {
      tempData.push(
        new ArticlesAndInterviewsDataObj(
          "0*ndy6ybdngG_h48BA",
          `${
            i + 1
          } An Interview with the International Dance Team of Sri Lanka`,
          Date.now(),
          convertTsToDate(Date.now()),
          "https://www.google.com/"
        )
      );
      await sleep(10);
    }
    setArticlesData(tempData);
  }, []);

  function handlSortChange(newSortState) {
    setArticlesData(
      sortDataBy(
        articlesData,
        "timeStamp",
        newSortState === "NEWEST_FIRST" ? 1 : -1
      )
    );
  }

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="articles-lower-section-primary-wrapper">
      <SortingComp onSortChangeFun={handlSortChange} />
      <ArticlesAndInterviewsGrid inputData={articlesData} />
    </div>
  );
}

export default ArticlesLowerSection;
