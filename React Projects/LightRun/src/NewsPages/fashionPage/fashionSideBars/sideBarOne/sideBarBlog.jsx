import { useEffect, useState } from "react";
import { data } from "./sideBarData";
import { Link } from "react-router";

const FashionSideBarOne = () => {
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
    <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-10" key={index}>
      <article className="rounded-2xl overflow-hidden shadow-lg dark:shadow-none border border-gray-100 dark:border-gray-800  transition-all duration-300 group hover:shadow-xl hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <img
            src={blog.urlToImage || "https://source.unsplash.com/random/600x400/?news"}
            alt="Blog"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Date overlay */}
          <div className="absolute bottom-4 left-4  text-sm font-medium px-3 py-1 rounded-full shadow backdrop-blur-md">
            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm   mb-1">
            By <span className="font-medium">{blog.author || "Unknown"}</span>
          </p>

          <h3 className="text-lg md:text-xl font-semibold line-clamp-2 mb-2">
            {blog.title}
          </h3>

          <h4 className="text-base font-normal text-blue-600 dark:text-blue-400 mb-3 line-clamp-2">
            {blog.description}
          </h4>

          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
            {blog.content}
          </p>

          <Link
          to="/fashion"
            className="inline-block text-sm font-semibold text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all"
          >
            Read More
          </Link>
        </div>
      </article>
    </div>
  ))}

    </div>
  );
};

export default FashionSideBarOne;
