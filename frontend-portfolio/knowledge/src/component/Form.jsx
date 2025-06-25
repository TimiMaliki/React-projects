const HeaderForm = () => (
	<form>
		<div className="form-group">
			<div className="input-group flex justify-center relative">
				<div
					className="min-h-[62px] leading-7 z-10 bg-gray-100 px-8 dark:bg-slate-800 focus:outline-none rounded-full ps-4 w-full">
                <p className="mt-4 text-md font-bold pl-4 text-white">"Want to know how smart you are!?"</p>
                </div>
				<button className="absolute right-2.5 top-1/2 -translate-y-1/2 py-2.5 px-8 text-white font-bold bg-blue-600 hover:bg-opacity-90 duration-300 z-50 rounded-full">
					click here
				</button>
			</div>
		</div>
	</form>
);

export default HeaderForm