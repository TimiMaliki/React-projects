import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Data } from "../celebrityViewMoreArticles/viewMoreData";

const CelebrityDetails = () => {
  const params = useParams();
  const [currentBlog, setCurrentBlog] = useState({});

  const getBlog = (id) => {
    const blog = Data.find((item) => item.id === Number(id));
    setCurrentBlog(blog);
  };

  useEffect(() => {
    getBlog(params.id);
  }, [params.id]);

  return (
    <section className="w-full px-4 md:px-8 py-12 md:py-20 bg-white dark:bg-[#0e0f11] text-gray-900 dark:text-white transition-all duration-300 mt-6 lg:mt-2">
      <div className="max-w-5xl mx-auto">

        {/* Celebrity Introduction Phrase */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-2 font-medium">
            Inside the Glamorous World of Celebrities
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            {currentBlog.headline}
          </h1>
        </div>

        {/* Feature Image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10">
          <img
            src={currentBlog.image_url}
            alt="Celebrity Feature"
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>

        {/* Author Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-center">
          <img
            src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
            alt="Author"
            className="w-14 h-14 rounded-full border-2 border-pink-500 shadow"
          />
          <div>
            <p className="text-base">
              Written by <span className="font-semibold">{currentBlog.author}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose dark:prose-invert prose-lg sm:prose-xl mx-auto max-w-none leading-relaxed">
          {currentBlog.content}
        </div>
      </div>
    </section>
  );
};

export default CelebrityDetails;
