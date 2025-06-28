import { Link } from "react-router-dom";

const HeaderForm = () => (
	<form>
    <div className="form-group w-full">
      <div className="bg-gray-100 dark:bg-slate-800 rounded-full p-4 md:p-6 flex flex-col md:flex-row items-center justify-between w-full gap-4">
        <p className="text-sm md:text-base font-bold text-white text-center md:text-left">
          "Want to know how smart you are!?"
        </p>

        <Link to="/test">
          <button
            type="button"
            className="py-2 px-6 md:px-8 text-sm md:text-base text-white font-bold bg-blue-600 hover:bg-opacity-90 transition duration-300 rounded-full"
          >
            Click Here
          </button>
        </Link>
      </div>
    </div>
  </form>
);

export default HeaderForm;
