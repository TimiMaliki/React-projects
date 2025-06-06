import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        });
        
        const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        };
        
        const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form data submitted:", formData);
        };
        
  return (
    <section
    class="ezy__contact14 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 relative dark:text-white overflow-hidden"
  >
    <div class="container px-4 mx-auto">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 w-full text-center sm:text-start mb-12">
          <h2
            class="font-bold text-4xl md:text-[55px] leading-[45px] md:leading-[70px] mb-0"
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
              <div class="flex items-center mb-8">
                <div>
                  <span class="text-7xl opacity-20 w-[80px]">
                    <i class="fas fa-home"></i>
                  </span>
                </div>
                <div class="ml-[-26px]">
                  <p class="tracking-widest not-italic mb-0">
                    28/1 Hamid Bila
                  </p>
                  <p class="tracking-widest not-italic mb-0">
                    Bhataliya, SYLHET
                  </p>
                </div>
              </div>
              <div class="flex items-center mb-8">
                <div>
                  <span class="text-7xl opacity-20 w-[80px]">
                    <i class="fas fa-phone"></i>
                  </span>
                </div>
                <div class="ml-[-26px]">
                  <p class="tracking-widest not-italic mb-0">
                    +880 1742 031080
                  </p>
                  <p class="tracking-widest not-italic mb-0">
                    +880 1777 272322
                  </p>
                </div>
              </div>
              <div class="flex items-center mb-8">
                <div>
                  <span class="text-7xl opacity-20 w-[80px]">
                    <i class="fas fa-envelope-open-text"></i>
                  </span>
                </div>
                <div class="ml-[-26px]">
                  <p class="tracking-widest not-italic mb-0">
                    santush@gmail.com
                  </p>
                  <p class="tracking-widest not-italic mb-0">
                    deb@santush.com
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
                    class="py-4 min-h-48 leading-40 border-b-2 border-blue-400 border-opacity-25 bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full opacity-70 outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3 mt-2">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    class="py-4 min-h-48 leading-40 border-b-2 border-blue-400 border-opacity-25 bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full opacity-70 outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3 mt-2">
                  <input
                    type="text"
                    placeholder="Company Name"
                    class="py-4 min-h-48 leading-40 border-b-2 border-blue-400 border-opacity-25 bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full opacity-70 outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6">
                <div class="mb-3 mt-2">
                  <input
                    type="email"
                    placeholder="Subject"
                    class="py-4 min-h-48 leading-40 border-b-2 border-blue-400 border-opacity-25 bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full opacity-70 outline-none transition duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="col-span-12">
                <textarea
                  rows="3"
                  placeholder="Enter Your Message"
                  class="pb-8 min-h-48 leading-40 border-b-2 border-blue-400 border-opacity-25 bg-transparent rounded-none focus:border-blue-500 focus:shadow-none w-full opacity-70 outline-none transition duration-200 ease-in-out"
                >
                </textarea>
              </div>
              <div class="col-span-12">
                <div class="mt-4 text-end md:text-start">
                  <button
                    class="border rounded-md border-gray-300 border-opacity-25 py-3 px-4 bg-white dark:bg-transparent hover:bg-[#28303B] dark:hover:bg-white hover:text-white dark:hover:text-[#4E5762] transition duration-200 ease-in-out"
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