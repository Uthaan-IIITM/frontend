import React from "react";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import ArticlesAndInterviewsCard from "./ArticlesAndInterviewsCard";

import "../../styles/_general/articles_and_interviews_grid.css";

function ArticlesAndInterviewsGrid({ inputData = [], sortBy = "DATE" }) {
  const [articlesAndInterviewsData, setArticlesAndInterviewsData] =
    useState(inputData);

  useEffect(() => {
    setArticlesAndInterviewsData(inputData);
  }, [inputData]);
  return (
    <div className="articles-and-interviews-grid-primary-wrapper">
      {articlesAndInterviewsData.map((article, index) => {
        return (
          <div
            className="articles-and-interviews-grid-children-wrapper"
            key={index}
          >
            <ArticlesAndInterviewsCard
              imageUrl={article.imageUrl}
              title={article.title}
              date={article.date}
              link={article.link}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ArticlesAndInterviewsGrid;
