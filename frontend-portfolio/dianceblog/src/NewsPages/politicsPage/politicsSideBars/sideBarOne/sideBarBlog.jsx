import { useEffect, useState } from "react";
import { data } from "./sideBarData";

const SideBarOne = () => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    if (data && data[0] && data[0].articles) {
      setBlog(data[0]);
    }
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blog?.articles?.length > 0 &&
        blog.articles.map((article, index) => (
          <article 
            key={index}
            className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image with gradient overlay */}
            <div className="relative h-60 overflow-hidden">
              <img
                src={article.urlToImage || 'https://source.unsplash.com/random/600x400/?blog,tech'}
                alt={article.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="inline-block px-3 py-1 bg-white/90 text-gray-900 text-xs font-semibold rounded-full backdrop-blur-sm">
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
  
            {/* Content */}
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  By {article.author || 'Unknown Author'}
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  {article.source?.name || 'Source'}
                </span>
              </div>
  
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                {article.description}
              </p>
  
              <div className="flex justify-between items-center">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 font-medium transition-colors"
                >
                  Read Full Story
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
    </div>
  </div>
  );
};

export default SideBarOne;
