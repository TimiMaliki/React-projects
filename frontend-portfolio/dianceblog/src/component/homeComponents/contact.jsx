import React, { useState } from "react";

const Contact = () => {
       
  return (
    <section
    class="ezy__contact14 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-black relative dark:text-white overflow-hidden "
  >
    <div class="container px-4 mx-auto">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 w-full justify-center items-center  text-center sm:text-start mb-12">
          <h2
            class="font-bold  text-4xl md:text-[55px] leading-[45px] md:leading-[70px] mb-0"
          >
            Stay In Touch
          </h2>
          <p
            class="text-sm leading-7 font-normal uppercase tracking-widest opacity-90 md:ml-[5%]"
          >
            Have any question? Drop us a message.
          </p>
        </div>
      </div>
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-5">
          <address class="mt-5">
            <div>
              <div class="flex  items-center mb-8">
                <div>
                  <span class="text-7xl opacity-20 w-[80px]">
                    <i class="fas fa-home"></i>
                  </span>
                </div>
                <div class="ml-[-6px]">
                  <p class="tracking-widest not-italic mb-0">
                  No 4 odi nwankwo street
                  </p>
                  <p class="tracking-widest not-italic mb-0">
                    mile 50 abakaliki
                  </p>
                </div>
              </div>
              <div class="flex  items-center mb-8">
                <div>
                  <span class="text-7xl opacity-20 w-[80px]">
                    <i class="fas fa-phone"></i>
                  </span>
                </div>
                <div class="ml-[-6px]">
                  <p class="tracking-widest not-italic mb-0">
                  +234 906 737 6592
                  </p>
                  <p class="tracking-widest not-italic mb-0">
                  +234 916 321 8075
                  </p>
                </div>
              </div>
              <div class="flex  items-center mb-8">
                <div>
                  <span class="text-7xl opacity-20 w-[80px]">
                    <i class="fas fa-envelope-open-text"></i>
                  </span>
                </div>
                <div class="ml-[-6px]">
                  <p class="tracking-widest not-italic mb-0">
                    malikitimi@gmail.com
                  </p>
                  <p class="tracking-widest not-italic mb-0">
                    timilehinmaliki@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </address>
        </div>
        <div class="col-span-12 md:col-span-7 mt-5">
          <form action="">
            <div class="grid grid-cols-12 gap-4">
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3 mt-2">
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    class="py-4 min-h-48 text-black border-b-2 border-black  bg-white rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3 mt-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    class="py-4 min-h-48 text-black border-b-2 border-black  bg-white rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3 mt-2">
                  <input
                    type="text"
                    placeholder="Company Name"
                    class="py-4 min-h-48 text-black border-b-2 border-black  bg-white rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3 mt-2">
                  <input
                    type="email"
                    placeholder="Subject"
                    class="py-4 min-h-48 text-black border-b-2 border-black  bg-white rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="col-span-12">
                <textarea
                  rows="3"
                  placeholder="Enter Your Message"
                  class="py-4 min-h-48 text-black border-b-2 border-black  bg-white rounded-none focus:border-blue-500 focus:shadow-none w-full  outline-none transition duration-200 ease-in-out"
                >
                </textarea>
              </div>
              <div class="col-span-12">
                <div class="mt-4 text-end md:text-start">
                  <button
                    class="border rounded-md border-gray-300 border-opacity-25 py-3 px-4 bg-black text-white dark:bg-transparent hover:bg-[#28303B] dark:hover:bg-white hover:text-white dark:hover:text-[#4E5762] transition duration-200 ease-in-out"
                  >
                    GET IN TOUCH <i class="fas fa-angle-right ml-2"></i>
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