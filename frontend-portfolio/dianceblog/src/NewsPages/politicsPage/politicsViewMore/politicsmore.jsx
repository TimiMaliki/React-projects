import React, {useState} from "react";
import { Link } from "react-router";
import { Data } from "../politicsViewMoreArticles/viewMoreData";

const Politic_Articles = () => {
  const [blog] = useState(Data);

 
  return (
    <div className="w-full h-full mt-10 lg:mt-20">
    {/* Section Header */}
    <div className="w-full px-4 py-10 text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold ">
        In-Depth Political Coverage
      </h2>
      <p className="mt-2 text-sm">
        Latest developments, policies, and political events shaping the world.
      </p>
    </div>
  
    {/* Articles Grid */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20">
      {blog && blog.map((data, index) => (
        <div key={index} className=" rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
          
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={data.image_url}
              alt="Politics"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-3 left-3  text-xs font-semibold px-3 py-1 rounded-md shadow ">
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric", month: "short", day: "numeric"
              })}
            </div>
          </div>
  
          {/* Content */}
          <div className="p-5 flex flex-col justify-between flex-1">
            <p className="text-sm  mb-1">
              By {data.author || "Unknown Author"}
            </p>
            <p className="text-xs uppercase text-blue-600 font-semibold mb-2">
              {data.category || "Politics"}
            </p>
            <h3 className="text-xl font-bold  mb-3 line-clamp-2">
              {data.headline}
            </h3>
            <p className="text-sm  mb-4 line-clamp-3">
              {data.description || data.summary}
            </p>
  
            {/* CTA */}
            <Link to={`/politicsDetails/${data.id}`}>
              <div className="inline-block mt-auto text-center bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 px-4 py-2 rounded-md text-sm font-medium">
                Read Full Report
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default Politic_Articles;
