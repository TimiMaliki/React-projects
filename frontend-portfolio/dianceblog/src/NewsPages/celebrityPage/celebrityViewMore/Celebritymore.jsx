import React, {useState} from "react";
import { Link } from "react-router";
import { Data } from "../celebrityViewMoreArticles/viewMoreData";

const Celebrity_Article = () => {
    const [blog] = useState(Data);
    return ( 
        <div className="w-full h-full mt-2">
        <div className="article-component w-full h-full p-12 lg:p-20">
          <h2 className="text-center lg:text-start text-2xl lg:text-5xl font-bold">
            Articles
          </h2>
        </div>
  
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 place-content-center mb-2 gap-4">
          {blog && blog.map((data, index) => (
            <div className="card-one" key={index}>
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12 p-2 lg:p-5">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src={data.image_url}
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
  
                 <div className="absolute bottom-2 left-2 text-lg leading-6 px-3 py-2 lg:px-6 lg:py-3 font-black opacity-80 rounded-lg">
                      {new Date().toDateString()}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By {data.author || "Unknown Author"}
                    </p>
                    <p className="">
                    {data.category}
                    </p>
                    <div className="text-blue-600 font-semibold mb-2">
                      {data.headline}
                    </div>
                    <h4 className="font-medium text-lg mb-4">
                      {data.description}
                    </h4>
                    <p className="opacity-60 mb-6">{data.summary}</p>
                    <Link to={`/celebrityDetails/${data.id}`}>
                    <div   className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition cursor-pointer">
                    Read More
                    </div>
                   </Link>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
     );
}
 
export default Celebrity_Article;