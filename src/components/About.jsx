import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const About = () => {
	return (
		<div
			name="about"
			id="about"
			className="w-full h-screen bg-[#0a192f] text-gray-300"
		>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
					<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
						<div className="sm:text-right pb-8 pl-4">
							<p className="text-4xl font-bold inline border-b-4 border-cyan-500" id='ab-p'>
								About
							</p>
						</div>
						<div></div>
					</div>
					<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
						<div className="sm:text-right text-4xl font-bold" >
							<p id='para-c'>
								Hi. I'm Danish Pinjari.
							</p>
						</div>
						<div>
							<p className='about-para'>
								{' '}
								Developing Responsive Web Applications with Experience in Front
								End Development Websites that are scalable. The skills I possess
								are HTML, CSS, and JavaScript. In addition to Front End Web
								development, I also provide Front End Web development services
								using React.js. My skills encompass a wide range of technology,
								and I am quick to pick up new skills.
							</p>
						</div>
					</div>
				</div>
				<div className="re-div">
						<Link
							to="skills"
							smooth
							duration={500}
							className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
						>
							Skills
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight size={25} className="ml-3" />
							</span>
						</Link>
						
					</div>
			</div>
			
		</div>
	);
};
export default About;
