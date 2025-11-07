import { useContext, useState, useEffect } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";

const Subscribe = () => {
  const { isLight, dark, light } = useContext(ToggleThemeContext);
  const themeStyle = isLight ? light : dark;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section
      className="w-full  py-16 flex items-center justify-center"
      style={{
        background: themeStyle.bg,
        color: themeStyle.hex,
      }}
    >
      <div className="max-w-xl text-center px-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 ">STAY CONNECTED</h1>
        <p className="mb-8">
          Subscribe to be the first to know about new product releases and
          exclusive events.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter Email"
            className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black transition"
          />
          <button
            type="submit"
            className="px-8 py-3  rounded-full hover: hover: transition font-medium cursor-pointer"
          >
            Subscribe
          </button>
        </form>

        {status === "success" && (
          <div className="mt-4 text-green-600 text-lg">
            Thank you! Your submission has been received!
          </div>
        )}

        {status === "error" && (
          <div className="mt-4 text-red-500 text-lg">
            Oops! Please enter a valid email address.
          </div>
        )}
      </div>
    </section>
  );
};

export default Subscribe;
