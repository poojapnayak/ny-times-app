import React, { useEffect, useState } from "react";
import "./ArtcleList.css";

const ArticleList = () => {
  const [articleList, setArticleList] = useState([]);

  const apiurl =
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=5LbqMlymUsHybKnkbGrcj1bNriBGSrPz";

  async function fetchData() {
    const res = await fetch(apiurl);
    const data = await res.json();
    setArticleList(data);
    console.log("artciles:::", data.results);
    return data;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="articleList">
      <h2>Article List</h2>
      <ul className="articleList-items">
        {articleList &&
          articleList.results &&
          articleList.results.map((article, index) => (
            <div className="articleList-list-item">
              <span>{article.title}</span>
              <li>
                <a href={article.url} target="_blank">
                  {article.url}
                </a>
              </li>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default ArticleList;
