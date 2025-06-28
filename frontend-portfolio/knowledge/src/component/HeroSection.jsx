import HeaderForm from "./Form";
import Shapes from "./Shapes";

const HeroHeader = () => {
	return (
		<header className="ezy__header34 pt-16 md:pt-28 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<Shapes/>

			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-12 gap-6">
					<div className="col-span-12 lg:col-span-7 text-center lg:text-start">
						<div className="flex flex-col justify-center h-full">
							<h2 className="text-3xl font-bold md:text-[70px] leading-none mb-6">
								Discover a new way of learning
							</h2>
							<div className="flex flex-col gap-y-6 mx-auto lg:mx-0">
								<div className="max-w-lg">
									<p className="text-[17px] leading-[1.8] opacity-80 mb-6">
									"Test your brainpower with quick and fun quizzes! Whether you're brushing up on general knowledge or 
									just curious about what you know, this is the place to challenge yourself and learn something new every time."
									</p>
								</div>
								<div className="max-w-xl">
									<HeaderForm/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-5 relative text-center">
						<div>
							<img
								src="https://cdn.easyfrontend.com/pictures/quiz_1.png"
								alt=""
								className="max-w-full h-auto mx-auto"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};


export default HeroHeader