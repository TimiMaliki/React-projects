import { useEffect } from "react";
import Border from "./Border";
import Latest from "./LatestStoryBox";

const BlogCols = () => {
 
  return (
    <div className="w-full mt-4">
      <Border />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-4">
        <div className="first-grid">
          <Latest head={"latest"} body={"Inspiration from leaders and Communities around the world "} viewMore={"View All Stories"} bgColor='bg-blue-900' />
        </div>

        <div className="second-grid flex justify-center gap-3">
          <div className="divider w-1 h-full bg-slate-800"></div>
          <div className="grid place-content-center">
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                      26
                      <br />
                      Oct
                      <br />
                      2016
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By{" "}
                      <a href="#" className="text-blue-600">
                        Mahws Georgia
                      </a>
                    </p>
                    <h4 className="font-medium text-2xl">
                      Dolor sit amet, consectetur adiplscing eliyt sed
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">
                      Assumenda non repellendus distinctio nihil dicta sapiente,
                      quibusdam maiores.
                    </p>
                    <a
                      href="#"
                      className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                      26
                      <br />
                      Oct
                      <br />
                      2016
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By{" "}
                      <a href="#" className="text-blue-600">
                        Mahws Georgia
                      </a>
                    </p>
                    <h4 className="font-medium text-2xl">
                      Dolor sit amet, consectetur adiplscing eliyt sed
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">
                      Assumenda non repellendus distinctio nihil dicta sapiente,
                      quibusdam maiores.
                    </p>
                    <a
                      href="#"
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

        <div className="third-grid flex justify-center gap-3">
          <div className="divider w-1 h-full bg-slate-800"></div>
          <div className="grid place-content-center">
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                      26
                      <br />
                      Oct
                      <br />
                      2016
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By{" "}
                      <a href="#" className="text-blue-600">
                        Mahws Georgia
                      </a>
                    </p>
                    <h4 className="font-medium text-2xl">
                      Dolor sit amet, consectetur adiplscing eliyt sed
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">
                      Assumenda non repellendus distinctio nihil dicta sapiente,
                      quibusdam maiores.
                    </p>
                    <a
                      href="#"
                      className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                      26
                      <br />
                      Oct
                      <br />
                      2016
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By{" "}
                      <a href="#" className="text-blue-600">
                        Mahws Georgia
                      </a>
                    </p>
                    <h4 className="font-medium text-2xl">
                      Dolor sit amet, consectetur adiplscing eliyt sed
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">
                      Assumenda non repellendus distinctio nihil dicta sapiente,
                      quibusdam maiores.
                    </p>
                    <a
                      href="#"
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
      </div>
      <Border />
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="first-grid">
        <Latest head={"latest"} body={"Inspiration from leaders and Communities around the world "} viewMore={"View All Stories"} bgColor='bg-red-900' />
        </div>

        <div className="second-grid flex justify-center gap-3">
          <div className="divider w-1 h-full bg-slate-800"></div>
          <div className="grid place-content-center">
            <div className="latest-col">
            <Latest head={"latest"} body={"Inspiration from leaders and Communities around the world "} viewMore={"View All Stories"} bgColor='bg-green-900' />
              <p className="mt-2">
                We’re building a world-class museum and public gathering space
                on the South Side of Chicago, where people from across the
                street or around the globe can come to get inspired, find common
                ground, and take action.
              </p>
            </div>
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                      26
                      <br />
                      Oct
                      <br />
                      2016
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By{" "}
                      <a href="#" className="text-blue-600">
                        Mahws Georgia
                      </a>
                    </p>
                    <h4 className="font-medium text-2xl">
                      Dolor sit amet, consectetur adiplscing eliyt sed
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">
                      Assumenda non repellendus distinctio nihil dicta sapiente,
                      quibusdam maiores.
                    </p>
                    <a
                      href="#"
                      className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                      26
                      <br />
                      Oct
                      <br />
                      2016
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By{" "}
                      <a href="#" className="text-blue-600">
                        Mahws Georgia
                      </a>
                    </p>
                    <h4 className="font-medium text-2xl">
                      Dolor sit amet, consectetur adiplscing eliyt sed
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">
                      Assumenda non repellendus distinctio nihil dicta sapiente,
                      quibusdam maiores.
                    </p>
                    <a
                      href="#"
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
      </div>
      <Border />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
        <div className="first-grid hidden lg:block">
        <Latest head={"latest"} body={"Inspiration from leaders and Communities around the world "} viewMore={"View All Stories"} bgColor='bg-yellow-900'/>
        </div>

        <div className="second-grid flex justify-center gap-3">
          <div className="divider w-1 h-full bg-slate-800"></div>
          <div className="grid place-content-center">
            <div className="latest-col">
            <Latest head={"latest"} body={"Inspiration from leaders and Communities around the world "} viewMore={"View All Stories"}  bgColor='bg-pink-900'/>
              <p className="mt-2">
                We’re building a world-class museum and public gathering space
                on the South Side of Chicago, where people from across the
                street or around the globe can come to get inspired, find common
                ground, and take action.
              </p>
            </div>
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                      26
                      <br />
                      Oct
                      <br />
                      2016
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By{" "}
                      <a href="#" className="text-blue-600">
                        Mahws Georgia
                      </a>
                    </p>
                    <h4 className="font-medium text-2xl">
                      Dolor sit amet, consectetur adiplscing eliyt sed
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">
                      Assumenda non repellendus distinctio nihil dicta sapiente,
                      quibusdam maiores.
                    </p>
                    <a
                      href="#"
                      className="bg-transparent hover:bg-blue-600 border border-blue-600 hover:text-white py-2 px-5 rounded transition"
                    >
                      Read More
                    </a>
                  </div>
                </article>
              </div>
            </div>
            <div className="card-one">
              <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-3 mt-12">
                <article className="rounded-lg">
                  <div className="relative">
                    <img
                      src="https://cdn.easyfrontend.com/pictures/blog/blog_3.jpg"
                      alt="Blog"
                      className="h-auto w-full rounded-lg shadow-lg dark:shadow-none"
                    />
                    <div className="absolute bottom-2 left-2 text-lg leading-6 px-6 py-3 font-black bg-white opacity-80 rounded-lg">
                      26
                      <br />
                      Oct
                      <br />
                      2016
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="font-light text-sm leading-6 mb-2">
                      By{" "}
                      <a href="#" className="text-blue-600">
                        Mahws Georgia
                      </a>
                    </p>
                    <h4 className="font-medium text-2xl">
                      Dolor sit amet, consectetur adiplscing eliyt sed
                    </h4>
                    <p className="opacity-60 mt-3 mb-6">
                      Assumenda non repellendus distinctio nihil dicta sapiente,
                      quibusdam maiores.
                    </p>
                    <a
                      href="#"
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
      </div>
    </div>
  );
};

export default BlogCols;
