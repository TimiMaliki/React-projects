import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signIn from "../images/signin.jpg"

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    // Placeholder auth
    if (email === "demo@htcbooking.com" && password === "123456") {
      navigate("/");
    } else {
      setError("Invalid credentials. Try demo@htcbooking.com / 123456");
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white">
      {/* === Left Hero Section === */}
      <div className="flex-1 flex flex-col justify-center px-10 py-16 signInImage bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm" />
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl p-2 font-extrabold mb-6 text-white mt-10  md:-mt-28 tracking-tight">
            Welcome to HTC Booking
          </h1>
          <p className="text-xl text-white text-center font-semibold mb-8 leading-relaxed">
          Plan, book, and experience the world with ease.  
          </p>

          <ul className="space-y-3 text-gray-300">
            <li className="text-2xl">✈️ Book Flights Worldwide</li>
            <li className="text-2xl">🏨 Reserve Hotels Instantly</li>
            <li className="text-2xl">🚗 Rent Cars Anytime, Anywhere</li>
            <li className="text-2xl">🎡 Find Local Attractions You’ll Love</li>
          </ul>
        </div>
      </div>

      {/* === Right Sign-In Form === */}
      <div className="flex-1 flex justify-center items-center px-8 py-16 bg-red-500 rounded-3xl">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
            Sign In to Continue
          </h2>

          <form onSubmit={handleSignIn} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-300 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-gray-300 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Error */}
            {error && <p className="text-red-400 text-center text-sm">{error}</p>}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold text-lg"
            >
              Sign In
            </button>
          </form>

          {/* Extras */}
          <div className="text-center text-sm text-gray-400 mt-6">
            <p>
              Don’t have an account?{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                Create one
              </span>
            </p>
            <p className="mt-2 cursor-pointer hover:text-blue-400">
              Forgot Password?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
