import useFetchCars from "../CarsUseEffect/useFetchCars";

const CarsData = () => {
  const { data } = useFetchCars(
    "https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&limit=3&api_token=3mfWkiBFCYm3FP9yObOBDeY1Dx7m2y40XFENhw2J"
  );
  // "https://api.currentsapi.services/v1/latest-news?apiKey=VyRh9BmpQo6L85ROtNKfee2du5UsItzTsHJCM-Zuegjx_blj&limit=5"
  return (
    <div className="grid place-content-center">
      {data &&
        data.data.map((blog, index) => (
          <div className="" key={index}>
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src={blog.image_url}
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6  px-3 py-2 lg:px-6 lg:py-3 font-black bg-slate-500 opacity-80 rounded-lg">
                      {blog.published_at}
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By {blog.author}
                   
                      <a href="#" className="text-blue-600">
                        {blog.title}
                      </a>
                    </p>
                    <h4 className="font-medium text-2xl mb-6">
                      {blog.description}
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">{blog.snippet}</p>
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

export default CarsData;
