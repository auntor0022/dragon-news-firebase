import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { image_url, title, details, category_id } = news;

  return (
    <div className="border border-base-300 rounded-xl">
      <div className="p-8">
        <img className="w-full h-[600px] rounded-xl" src={image_url} alt="" />
        <h1 className="mt-5 font-bold text-2xl">{title}</h1>
        <p className="mt-3 font-normal text-base text-accent">{details}</p>
        <Link to={`/category/${category_id}`} className="btn btn-secondary mt-8 font-medium text-xl py-6"><FaArrowLeft size={20} /> All news in this category</Link>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
