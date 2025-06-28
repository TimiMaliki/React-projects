import { Link } from "react-router-dom";

const HeaderForm = () => (
  <form>
    <div className="form-group">
      <div className="input-group flex justify-center relative">
        <div className="min-h-[94px] lg:min-h-[62px] leading-7 z-10 bg-gray-100 px-8 dark:bg-slate-800 focus:outline-none rounded-full ps-4 w-full mb-2 lg:mb-4">
          <p className=" mt-2 lg:mt-4 text-sm lg:text-md font-bold text-center text-white">
            "Want to know how smart you are!?"
          </p>
        </div>
        <Link to={"/test"}>
          <button className="absolute right-4 md:right-6 top-12 md:top-7 -translate-y-1/2 py-2 px-5 md:py-2  md:px-8 text-sm md:text-base text-white font-bold bg-blue-600 hover:bg-opacity-90 transition duration-300 z-50 rounded-full">
            Click Here
          </button>
        </Link>
      </div>
    </div>
  </form>
);

export default HeaderForm;
