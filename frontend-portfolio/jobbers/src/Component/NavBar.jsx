const Navbar = () => {
  return (
    <nav className="bg-white border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* Logo */}
            <a
              className="flex flex-shrink-0 items-center mr-4"
              href="/index.html"
            >
              <h1 className="text-6xl text-blue-700 font-bold">Collars</h1>
            </a>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <a
                  href="/index.html"
                  className="text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Home
                </a>
                <a
                  href="/jobs.html"
                  className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Jobs
                </a>
                <a
                  href="/add-job.html"
                  className="text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
                >
                  Add Job
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
