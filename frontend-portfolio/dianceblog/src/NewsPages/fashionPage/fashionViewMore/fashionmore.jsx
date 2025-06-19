import React, {useState} from "react";
import { Link } from "react-router";
import { Data } from "../fashionViewMoreArticles/viewMoreData";

const Fashion_Article = () => {
    const [blog] = useState(Data);
    return ( 
      <div className="w-full h-full mt-10 lg:mt-20">
  {/* Section Heading */}
  <div className="w-full px-4 py-10 text-center lg:text-left">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
      Fashion Front Row
    </h2>
    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Trends, collections, and style icons shaping the runway and streetwear.
    </p>
  </div>

  {/* Articles Grid */}
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20">
      {blog && blog.map((data, index) => (
        <div key={index} className="bg-white dark:bg-[#121826] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
          
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={data.image_url}
              alt="Fashion"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-3 left-3 bg-white/80 dark:bg-black/70 text-xs font-semibold px-3 py-1 rounded-md shadow text-gray-900 dark:text-white">
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric", month: "short", day: "numeric"
              })}
            </div>
          </div>
  
          {/* Content */}
          <div className="p-5 flex flex-col justify-between flex-1">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
              By {data.author || "Unknown Author"}
            </p>
            <p className="text-xs uppercase text-pink-500  dark:text-blue-400 font-semibold mb-2">
              {data.category || "Fashion"}
            </p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
              {data.headline}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {data.description || data.summary}
            </p>
  
            {/* CTA */}
            <Link to={`/fashionDetail/${data.id}`}>
              <div className="inline-block mt-auto text-center bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 px-4 py-2 rounded-md text-sm font-medium">
                Read Full Story
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
</div>

     );
}
 
export default Fashion_Article;