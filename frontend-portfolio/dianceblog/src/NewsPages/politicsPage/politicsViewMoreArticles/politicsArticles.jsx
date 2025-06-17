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
     }, [])
  
    return (  
        <section className="w-full ">
        <div className="container grid place-content-center">
        
          <div className="w-full max-w-3xl text-center mb-10 mt-24">
            <h1 className="font-bold text-2xl md:text-5xl">
                 {currentBlog.headline} 
            </h1>
          </div>
      
          <div className="w-full max-w-3xl">
            <div className="mb-6 flex justify-center">
              <img
               src={currentBlog.image_url}
                alt=""
                className="w-full h-auto rounded"
              />
            </div>

            <div className="flex flex-col items-center  mb-8 text-center">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <img
                  src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
                  alt="Author"
                  className="w-12 h-12 rounded-full border border-btnBorder"
                />
                <div>
                  <p>
                    By <b>{currentBlog.author}</b>
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{new Date().toDateString()}</p>
                </div>
              </div>
      
            </div>

            <div className="prose dark:prose-invert text-center max-w-none">
              {currentBlog.content}
            </div>
          </div>
        </div>
      </section>
      
    );
}
 
export default BlogPoliticsDetails;