import { Link } from "react-router-dom";

const HeaderForm = () => (
	<form>
		<div className="form-group">
			<div className="input-group flex justify-center relative">
				<div
					className="min-h-[94px] lg:min-h-[62px] leading-7 z-10 bg-gray-100 px-8 dark:bg-slate-800 focus:outline-none rounded-full ps-4 w-full">
                <p className="mb-4 mt-2 lg:mt-4 text-sm lg:text-md font-bold text-center text-white">"Want to know how smart you are!?"</p>
                </div>
				<Link to={"/test"}>
				<button className="absolute center lg:right-2.5 top-1/2 -translate-y-0.5 lg:-translate-y-1/2 py-1.5 px-4 lg:py-2.5 lg:px-8 text-white font-bold bg-blue-600 hover:bg-opacity-90 duration-300 z-50 rounded-full">
					click here
				</button>
				</Link>
			</div>
		</div>
	</form>
);

export default HeaderForm