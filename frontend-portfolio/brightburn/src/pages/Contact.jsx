const Contact = () => {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-6" id="contact">
        <div className="max-w-3xl w-full text-center">
          <h2 className="text-4xl md:text-7xl font-extrabold  text-black mb-8">
            Get In <span className="text-red-700">Touch</span>
          </h2>
          <p className="text-2xl font-semibold text-black max-w-3xl mx-auto mb-12">
            We'd love to hear from you! Reach out via phone, email, or visit us at our office.
          </p>
  
          <div className="space-y-8 text-gray-800 text-lg">
            <div className="flex flex-col items-center">
              <span className="font-semibold text-red-700 text-xl mb-1">Phone</span>
              <a href="tel:+2349067376592" className="hover:text-red-600 transition  text-black">
                +234 906 737 6592
              </a>
            </div>
  
            <div className="flex flex-col items-center">
              <span className="font-semibold text-red-700 text-xl mb-1">Email</span>
              <a
                href="mailto:malikitimi@gmail.com"
                className="hover:text-red-600 transition  text-black"
              >
               malikitimi@gmail.com
              </a>
            </div>
  
            <div className="flex flex-col items-center">
              <span className="font-semibold text-red-700 text-xl  mb-1">Address</span>
              <p className="max-w-sm  text-black">
                11 Odi Nwankwo street,<br /> Abakaliki, Ebonyi State, Nigeria
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  