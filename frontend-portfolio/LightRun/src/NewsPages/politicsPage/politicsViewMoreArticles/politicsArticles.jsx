import React, {useState} from "react";
import { useParams } from "react-router";
import { Data } from "../politicsViewMoreArticles/viewMoreData";

const BlogPoliticsDetails = () => {
    const params = useParams()

    const [currentBlog , setCurrentBlog] = useState({})
  
    const getBlog = (id) => {
         const currentBlog = Data.find((blog) => {
          console.log(blog.id)
          return blog.id === Number(id)
         })
  
         setCurrentBlog(currentBlog)
    }
  
     React.useEffect(() => {
            getBlog(params.id)
     }, [params.id])
  
    return (  
      <section className="w-full px-4 md:px-6 lg:px-8 py-12 md:py-20 bg-white dark:bg-[#0d1117] text-gray-900 dark:text-white transition-all duration-300 mt-6 lg:mt-2">
      <div className="max-w-5xl mx-auto">
    
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest font-medium text-blue-700 dark:text-blue-400 mb-2">
            Political Insight & Global Affairs
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            {currentBlog.headline}
          </h1>
        </div>
    
        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-10">
          <img
            src={currentBlog.image_url}
            alt="Political Article Cover"
            className="w-full h-auto max-h-[500px] object-contain"
          />
        </div>
    
        {/* Author Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-center">
          <img
            src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
            alt="Author"
            className="w-14 h-14 rounded-full border-2 border-blue-600 dark:border-blue-400 shadow"
          />
          <div>
            <p className="text-base">
              By <span className="font-semibold">{currentBlog.author}</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric"
              })}
            </p>
          </div>
        </div>
    
        {/* Main Article Content */}
        <div className="prose dark:prose-invert prose-lg sm:prose-xl max-w-none mx-auto leading-relaxed">
          {currentBlog.content}
        </div>
      </div>
    </section>
    
      
      
    );
}
 
export default BlogPoliticsDetails;