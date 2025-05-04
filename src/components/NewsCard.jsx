import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const { id, title, rating, total_view, author, image_url, details } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString(
    "en-US"
  );

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-base-300">
      <div className="flex justify-between items-center bg-base-200">
        <div className="flex items-center gap-4 p-4">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm">
            <p className="font-semibold text-base">{author.name}</p>
            <p className="text-gray-500 text-sm">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-2 mr-4">
          <CiBookmark  size={28}/>
          <CiShare2 size={28}/>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-5">{title}</h2>
        <img
          src={image_url}
          alt={title}
          className="w-full h-[268px] object-cover rounded-md mb-8"
        />
        <p className="text-accent text-base mb-3">
          {details.length > 200 ? `${details.slice(0, 200)}...` : details}
        </p>
        <Link to={`/news-card/${id}`} className="text-orange-500 cursor-pointer font-semibold text-lg hover:underline">
          Read More
        </Link>
          </div>
          
          <div className="border border-base-300 m-4"></div>

      <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
        <div className="flex items-center justify-center gap-1 mb-6 text-orange-500">
          {Array.from({ length: rating.number }, (_, i) => (
            <FaStar key={i} size={20} />
          ))}
          <span className="ml-1 text-accent font-medium text-base">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-2 text-accent font-medium text-base">
          <FaEye size={20} />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
