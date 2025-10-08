import { Home, Search } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-green-50 px-6">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-green-700 drop-shadow-lg">404</h1>
        <p className="mt-4 text-xl font-semibold text-green-900">Page Not Found</p>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          Oops! The page you are looking for doesn’t exist or may have been moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition"
          >
            <Home className="w-5 h-5" /> Back to Home
          </Link>
          <Link
            to="/jobs"
            className="flex items-center gap-2 bg-yellow-400 text-green-900 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            <Search className="w-5 h-5" /> Browse Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
