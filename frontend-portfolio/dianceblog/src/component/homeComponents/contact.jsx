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
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: 'Newsreader, "Noto Sans", sans-serif' }}
    >
      <div className="flex h-full grow flex-col items-center justify-center px-4 py-10">
        <div className="max-w-[960px] w-full">
          <div className="flex flex-wrap justify-center gap-3 p-4">
            <p className="text-[#141414] tracking-light text-4xl font-bold leading-tight text-center min-w-72">
              Contact Diance-Blog
            </p>
          </div>
          <p className="text-[#141414] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, please use the form below to get in touch. We aim to
            respond to all inquiries within 48 hours.
          </p>
          <h2 className="text-[#141414] text-2xl font-bold leading-tight tracking-tight px-4 pb-3 pt-5 text-center">
            Send Us a Message
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex max-w-[480px] flex-col gap-6 mx-auto px-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-input w-full rounded-xl bg-[#f2f2f2] p-4 text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:ring-0 h-14"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="form-input w-full rounded-xl bg-[#f2f2f2] p-4 text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:ring-0 h-14"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-input w-full rounded-xl bg-[#f2f2f2] p-4 text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:ring-0 h-14"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="form-input w-full rounded-xl bg-[#f2f2f2] p-4 text-base text-[#141414] placeholder:text-[#757575] focus:outline-none focus:ring-0 min-h-[9rem] resize-none"
              required
            />

            <button
              type="submit"
              className="mx-auto flex w-full max-w-[480px] cursor-pointer items-center justify-center rounded-full bg-black p-4 text-sm font-bold leading-normal tracking-wide text-white transition hover:bg-gray-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

     

export default Contact;