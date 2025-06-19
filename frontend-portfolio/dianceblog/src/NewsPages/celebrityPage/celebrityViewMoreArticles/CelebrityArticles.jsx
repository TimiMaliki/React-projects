import React, { useState } from "react";
import { useParams } from "react-router";
import { Data } from "../celebrityViewMoreArticles/viewMoreData";

const CelebrityDetails = () => {

    const params  = useParams()

    const [currentBlog , setCurrentBlog] = useState({})

    const getBlog = ((id)=> {
        const currentBlog = Data.find((blog) => {
            return blog.id === Number(id)
        })
        setCurrentBlog(currentBlog)
    })

    React.useEffect(() => {
        getBlog(params.id)
    }, [params.id])

    return (
        <section className="w-full px-4 md:px-6 lg:px-8 py-10 md:py-20">
        <div className="max-w-5xl mx-auto">
          
          {/* Headline */}
          <div className="text-center mb-10">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
              {currentBlog.headline}
            </h1>
          </div>
      
          {/* Blog Image */}
          <div className="mb-8">
            <img
              src={currentBlog.image_url}
              alt="Blog Cover"
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow"
            />
          </div>
      
          {/* Author Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-center">
            <img
              src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
              alt="Author"
              className="w-14 h-14 rounded-full border border-gray-300 dark:border-btnBorder"
            />
            <div>
              <p className="text-base">
                By <b>{currentBlog.author}</b>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {new Date().toDateString()}
              </p>
            </div>
          </div>
      
          {/* Blog Content */}
          <div className="prose dark:prose-invert max-w-none prose-lg sm:prose-xl mx-auto">
            {currentBlog.content}
          </div>
      
        </div>
      </section>
      
      );
}
 
export default CelebrityDetails;