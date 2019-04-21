import React from "react";
import { ArticleData, ArticleHead } from "../../content";
import "./Article.scss";

const Article = () => {
  return (
    <article className="Article">
      <div className="Article__content">
        <h2>{ArticleHead}</h2>
        {ArticleData.map(item => {
          return <p key={item.id}>{item.text}</p>;
        })}
      </div>
    </article>
  );
};

export default Article;
