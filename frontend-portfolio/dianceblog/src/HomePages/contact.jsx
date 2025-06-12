import React, { useState } from "react";
import Headers from "./header";

const Contact = () => {
       
  return (
    <section
    className="ezy__contact14  py-14 md:py-24 relative  overflow-hidden "
  >
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 w-full justify-center items-center  text-center sm:text-start mb-12">
          <h2
            className="font-bold  text-4xl md:text-[55px] leading-[45px] md:leading-[70px] mb-0"
          >
            <Headers title={"Stay In Touch"}/>
          </h2>
          <p
            className="text-sm leading-7 font-normal uppercase tracking-widest opacity-90 md:ml-[5%]"
          >
            Have any question? Drop us a message.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-5">
          <address className="mt-5">
            <div>
              <div className="flex  items-center mb-8">
                <div>
                  <span className="text-7xl opacity-20 w-[80px]">
                    <i className="fas fa-home"></i>
                  </span>
                </div>
                <div className="ml-[-6px]">
                  <p className="tracking-widest not-italic mb-0">
                  No 4 odi nwankwo street
                  </p>
                  <p className="tracking-widest not-italic mb-0">
                    mile 50 abakaliki
                  </p>
                </div>
              </div>
              <div className="flex  items-center mb-8">
                <div>
                  <span className="text-7xl opacity-20 w-[80px]">
                    <i className="fas fa-phone"></i>
                  </span>
                </div>
                <div className="ml-[-6px]">
                  <p className="tracking-widest not-italic mb-0">
                  +234 906 737 6592
                  </p>
                  <p className="tracking-widest not-italic mb-0">
                  +234 916 321 8075
                  </p>
                </div>
              </div>
              <div className="flex  items-center mb-8">
                <div>
                  <span className="text-7xl opacity-20 w-[80px]">
                    <i className="fas fa-envelope-open-text"></i>
                  </span>
                </div>
                <div className="ml-[-6px]">
                  <p className="tracking-widest not-italic mb-0">
                    malikitimi@gmail.com
                  </p>
                  <p className="tracking-widest not-italic mb-0">
                    timilehinmaliki@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </address>
        </div>
        <div className="col-span-12 md:col-span-7 mt-5">
          <form action="">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6">
                <div className="mb-3 mt-2">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="py-4 min-h-48 text-black border-b-2  bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="mb-3 mt-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="py-4 min-h-48 text-black border-b-2  bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="mb-3 mt-2">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="py-4 min-h-48 text-black border-b-2  bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <div className="mb-3 mt-2">
                  <input
                    type="email"
                    placeholder="Subject"
                    className="py-4 min-h-48 text-black border-b-2  bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <textarea
                  rows="3"
                  placeholder="Enter Your Message"
                  className="py-4 min-h-48 text-black border-b-2  bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                >
                </textarea>
              </div>
              <div className="col-span-12">
                <div className="mt-4 text-end md:text-start">
                  <button
                    className="border rounded-md border-gray-300 border-opacity-25 py-3 px-4 bg-black text-white dark:bg-transparent hover:bg-[#28303B] dark:hover:bg-transparent hover:text-white dark:hover:text-[#4E5762] transition duration-200 ease-in-out"
                  >
                    GET IN TOUCH <i className="fas fa-angle-right ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  
  
  );
}

     

export default Contact;