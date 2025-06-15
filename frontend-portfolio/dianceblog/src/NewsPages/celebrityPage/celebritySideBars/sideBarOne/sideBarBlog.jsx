import { useEffect, useState } from "react";
import { data } from "./sideBarData";

const CelebritySideBarOne = () => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    if (data && data[0] && data[0].articles) {
      setBlog(data[0]);
    }
  }, []);
  return (
    <div className="grid place-content-center">
      {blog?.articles?.length > 0 &&
        blog.articles.map((blog, index) => (
          <div className="" key={index}>
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src={blog.urlToImage}
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6  px-3 py-2 lg:px-6 lg:py-3 font-black bg-white opacity-80 rounded-lg">
                      {blog.publishedAt}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By {blog.author}
                    </p>
                    <div className="text-blue-600"> {blog.title}</div>
                    <h4 className="font-medium text-2xl mb-6">
                      {blog.description}
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">{blog.content}</p>
                    <a
                      href={blog.url}
                      className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CelebritySideBarOne;
