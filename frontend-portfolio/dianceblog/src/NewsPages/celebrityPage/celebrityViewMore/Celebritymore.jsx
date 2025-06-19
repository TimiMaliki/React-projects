import React, { useState } from "react";
import { Link } from "react-router";
import { Data } from "../celebrityViewMoreArticles/viewMoreData";

const Celebrity_Article = () => {
  const [blog] = useState(Data);
  return (
    <div className="w-full h-full mt-10 lg:mt-20">
      {/* Section Heading */}
      <div className="w-full px-4 py-10 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
          Celebrity Buzz
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Breaking headlines, star power, and behind-the-scenes moments you
          can't miss.
        </p>
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20">
        {blog &&
          blog.map((data, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1c1c24] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={data.image_url}
                  alt="Celebrity"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/70 text-xs px-3 py-1 rounded shadow text-gray-900 dark:text-white font-semibold">
                  {new Date(data.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  By {data.author || "Unknown Author"}
                </p>
                <p className="text-xs uppercase text-pink-500 dark:text-blue-400 font-semibold mb-2">
                  {data.category || "Celebrity"}
                </p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                  {data.headline}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {data.description || data.summary}
                </p>

                {/* CTA */}
                <Link to={`/celebrityDetails/${data.id}`}>
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
};

export default Celebrity_Article;
