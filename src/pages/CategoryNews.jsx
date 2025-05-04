import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);

  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id, data);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
        setCategoryNews(filteredNews);
        return
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      <h2 className="font-semibold text-xl mb-5">Dragon News Home</h2>
          <div className="px-4 space-y-7">
              {
                  categoryNews.map(news=><NewsCard key={news.id} news={news}></NewsCard>)
              }
      </div>
    </div>
  );
};

export default CategoryNews;
