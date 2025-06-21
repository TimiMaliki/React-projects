import React, { useState } from "react";
import { useParams } from "react-router";
import { Data } from "../fashionViewMoreArticles/viewMoreData";

const FashionDetail = () => {
    const params = useParams()
    const [currentBlog , setCurrentBlog] = useState({})

 const getBlog = ((id) => {
    const currentBlog = Data.find((blog) => {
        return blog.id === Number(id)
    })
    setCurrentBlog(currentBlog)
 })

 React.useEffect(() => {
    getBlog(params.id)
 })
    return ( 
      <section className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-20 bg-white dark:bg-[#0c0c0f] text-gray-900 dark:text-white transition-all duration-300 mt-6 lg:mt-2">
      <div className="max-w-5xl mx-auto">
    
        {/* Fashion Heading */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-pink-500 dark:text-pink-400 font-medium mb-2">
            Runway Highlights & Designer Stories
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight font-serif">
            {currentBlog.headline}
          </h1>
        </div>
    
        {/* Feature Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl mb-12 relative">
          <img
            src={currentBlog.image_url}
            alt="Fashion Editorial"
            className="w-full h-auto max-h-[520px] object-contain"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
    
        {/* Author Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-center">
          <img
            src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
            alt="Author"
            className="w-14 h-14 rounded-full border-2 border-pink-400 dark:border-pink-500 shadow-md"
          />
          <div>
            <p className="text-base font-light">
              By <span className="font-semibold">{currentBlog.author}</span>
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
    
        {/* Article Content */}
        <div className="prose dark:prose-invert prose-lg sm:prose-xl mx-auto max-w-none leading-relaxed text-justify">
          {currentBlog.content}
        </div>
      </div>
    </section>
    
     );
}
 
export default FashionDetail;