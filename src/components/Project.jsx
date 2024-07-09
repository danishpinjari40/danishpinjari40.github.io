import React from 'react';
import project from '../assets/project.png';
import Github from './Github';
import '../App.css';
import Sliconix from '../assets/Sliconix.png';
import { Badge, Stack } from '@chakra-ui/react';
import SiliconixGif from '../assets/Project_Gif/SiliconixGif.gif';
import IndiaToday from '../assets/Project_Gif/IndiaToday.gif';
import CultFit from '../assets/Project_Gif/CultFit.gif';

const Works = () => {
	return (
		<div
			name="work"
			className="w-full md:h-screen text-gray-300 bg-[#0a192f] "
			id="projects"
		>
			<div
				className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full"
				id="project"
			>
				<div className="w-full flex justify-center items-center flex-col mt-15">
					<p
						className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500"
						id="proj-p"
					>
						Projects
					</p>
					<p className="py-6 text-2xl" id="proj_2">
						Check out some of my most recent work
					</p>
				</div>
				{/* Container *}

				
					{/* Grid Item */}
				<div
					className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
					id="container"
				>
					<div
						style={{
							backgroundImage: `url(${SiliconixGif})`,
							backgroundSize: '100% 98%',
						}}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
							<span className=" text-lg font-bold text-white tracking-wider">
								Siliconix Shop
							</span>
							<p className="text-center">
								It's a react E-commerce web application with all the major
								functionalities.
								<Badge colorScheme="green">Login</Badge>
								<Badge colorScheme="red">Sign Up</Badge>
								<Badge colorScheme="purple">Filtering</Badge>
								<Badge colorScheme="red">Add To Cart</Badge>
							</p>
							<p className="text-center">
								<Badge>TechStack :</Badge>
								<Badge colorScheme="green">React.js</Badge>
								<Badge colorScheme="red">Redux</Badge>
								<Badge colorScheme="purple">JavaScript</Badge>
								<Badge colorScheme="green">Rest API</Badge>
								<Badge colorScheme="red">CSS3</Badge>
								<Badge colorScheme="purple">HTML5</Badge>
								<Badge colorScheme="green">Chakra UI</Badge>
							</p>
							<div className="pt-8 text-center">
								<a
									href="https://siliconixapp.netlify.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Live Demo
									</button>
								</a>
								<a
									href="https://github.com/Durgesh9871/Siliconix"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Source Code
									</button>
								</a>
							</div>
						</div>
					</div>
					{/* 2nd project */}
					<div
						style={{
							backgroundImage: `url(${IndiaToday})`,
							backgroundSize: '100% 98%',
						}}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
							<span className=" text-lg font-bold text-white tracking-wider">
								Indiatoday.in Clone
							</span>
							<p className="text-center">
								India Today is a 24-hour English language television network
								based in Noida, carries news, current affairs in India.
								<Badge colorScheme="green">Login</Badge>
								<Badge colorScheme="red">Sign Up</Badge>
								<Badge colorScheme="purple">News By Category</Badge>
							</p>
							<p className="text-center">
								<Badge>TechStack :</Badge>
								<Badge colorScheme="purple">HTML5</Badge>
								<Badge colorScheme="red">CSS3</Badge>
								<Badge colorScheme="purple">JavaScript</Badge>
								<Badge colorScheme="green">Rest API</Badge>
								<Badge colorScheme="purple">BootStrap</Badge>
								<Badge colorScheme="red">Crusals</Badge>
							</p>
							<div className="pt-8 text-center">
								<a
									href="https://indiatoday-in-clone.vercel.app/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Live Demo
									</button>
								</a>
								<a
									href="https://github.com/danishpinjari40/Indiatoday.in_clone"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Source Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${CultFit})`,
							backgroundSize: '100% 98%',
						}}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover Effects */}
						<div className="opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col">
							<span className=" text-lg font-bold text-white tracking-wider">
								Urban Company Clone
							</span>
							<p className="text-center">
								It is an E-commerce website, through the app, you can book at
								home services - from beauty & wellness for women etc.
								<Badge colorScheme="green">My Section : </Badge>
								<Badge colorScheme="red">Lading Page</Badge>
								<Badge colorScheme="purple">Service page</Badge>
							</p>
							<p className="text-center">
								<Badge>TechStack :</Badge>
								<Badge colorScheme="purple">HTML5</Badge>
								<Badge colorScheme="red">CSS3</Badge>
								<Badge colorScheme="purple">JavaScript</Badge>
								<Badge colorScheme="green">JSON Server</Badge>
								<Badge colorScheme="purple">BootStrap</Badge>
								<Badge colorScheme="red">Crusals</Badge>
							</p>
							<div className="pt-8 text-center">
								<a
									href="https://capable-dragon-d91ac8.netlify.app"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Live Demo
									</button>
								</a>
								<a
									href="https://github.com/chanchal-soni98/outgoing-mine-4990"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
										Source Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<Github />
			</div>
		</div>
	);
};
export default Works;
