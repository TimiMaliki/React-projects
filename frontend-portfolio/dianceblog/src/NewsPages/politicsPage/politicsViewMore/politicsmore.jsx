const Politic_Articles = () => {
    return (  
        <div className="w-full h-full mt-2">
        <div className="article-component w-full h-full  p-12 lg:p-20">
          <div>
            <h2 className="text-black  text-center  lg:text-start text-2xl lg:text-5xl font-bold hover:text-yellow-700">
              Article
            </h2>
          </div>
          <div></div>
        </div>
  
        
          <div className="w-full h-full grid   place-content-center grid-cols-1 lg:grid-cols-3  mb-2 ">
          <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src={""}
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6  px-3 py-2 lg:px-6 lg:py-3 font-black  opacity-80 rounded-lg">
                     
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By 
                    </p>
                    <div className="text-blue-600"></div>
                    <h4 className="font-medium text-2xl mb-6">
                      
                    </h4>
                    <p className="opacity-60 mt-3 mb-6"></p>
                    <a
                      href={""}
                      className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
             
          </div>
    
      </div>
    );
}
 
export default Politic_Articles;