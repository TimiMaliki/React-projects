import { NavLink } from "react-router-dom";

const Navbar = () => {
    const linkActive = ({ isActive }) =>
      isActive
        ? "text-white bg-blue-600 rounded-lg px-4 py-2 transition-all duration-200 font-medium"
        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-4 py-2 transition-all duration-200 font-medium";
  
    return (
      <nav className="bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to={"/"}>
                <div className="flex items-center">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                    Jobber
                  </h1>
                  <span className="ml-1 text-blue-600 text-xl">®</span>
                </div>
              </NavLink>
            </div>
  
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                <NavLink to={"/"} className={linkActive}>
                  Home
                </NavLink>
                <NavLink to={"/jobs"} className={linkActive}>
                  Jobs
                </NavLink>
                <NavLink to={""} className={linkActive}>
                  Add Job
                </NavLink>
              </div>
            </div>
          </div>
        </div>
  
     
      </nav>
    );
  };


export default Navbar;
