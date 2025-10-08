import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    alert("🎉 Registration successful! You’ve earned 10 free booking credits!");
    navigate("/hotel");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-[#0d0f23] via-[#10142e] to-[#0b0d1d] text-white">
      {/* === Left Info Section === */}
      <div className="flex-1 flex flex-col justify-center px-10 py-16 register bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="relative z-10 max-w-xl">
          <h1 className="text-5xl font-bold mb-6 text-blue-400 tracking-tight">
            Welcome to HTC Booking
          </h1>
          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Join the ultimate travel platform where you can book <b>flights</b>, <b>hotels</b>, <b>cars</b>, and <b>attractions</b> — all in one place.
          </p>

          <div className="bg-blue-600/20 border border-blue-400/40 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl font-semibold text-blue-300 mb-2">
              Get Your Free Bonus Credits
            </h2>
            <p className="text-gray-100">
              Sign up today and enjoy <span className="text-blue-400 font-bold">10 FREE booking credits</span> on your first trip.
            </p>
          </div>
        </div>
      </div>

      {/* === Right Form Section === */}
      <div className="flex-1 flex justify-center items-center px-8 py-16 bg-red-700 rounded-3xl">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-10 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-400">
            Create Your Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-gray-300 font-medium">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 font-medium">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-300 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-gray-500 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {error && <p className="text-white text-center text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-semibold text-lg shadow-lg"
            >
              Register Now
            </button>
          </form>

          <div className="text-center text-sm text-gray-400 mt-6">
            <p>
              Already have an account?{" "}
              <span
                onClick={() => navigate("/signin")}
                className="text-blue-400 hover:underline cursor-pointer"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
