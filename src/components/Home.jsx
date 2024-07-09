import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import dp from '../assets/dp.png';
import { Link } from 'react-scroll';
import Type from './Type';
import Danish from '../assets/Danish Pinjari_Resume.pdf';
import '../App.css';

const Home = () => {
	// for Resume google drive link for different page
	const handleResumeDawnload = () => {
		window.open(
			'https://drive.google.com/file/d/1tTUz_Rvz4MVSHmi9vnwKlg1zHRYOh2Tk/view?usp=drive_link'
		);
	};
	return (
		<div name="home" className="h-screen w-full bg-[#0a192f]">
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full" id="main_div">
					<h1 className="heading">
						Hi,Greetings.{' '}
						<span className="wave" role="img" aria-labelledby="wave">
							👋
						</span>
					</h1>
					{/* <h2 className="text-4xl sm:text-7xl font-bold text-white">
          I'm Danish Pinjari
        </h2> */}
					<h1
						className="heading-name text-4xl sm:text-7xl
        
        "
					>
						I am
						<strong className="main-name"> Danish Pinjari</strong>
					</h1>
					{/* className="text-white py-5 max-w-md" */}
					<p className="paras">
						Detail-oriented Front-End Web Developer proficient in HTML, CSS,
						JavaScript, and React JS. Proven ability to translate creative
						concepts into responsive and interactive web apps, resulting in
						visually appealing websites that meet user needs and business
						objectives. During my 1 year stay with Hindustan Aeronautics
						Limited, I gained core front-end development knowledge and improved
						my web development skills.
					</p>
					<div
						style={{
							padding: 20,
							textAlign: 'left',
						}}
					>
						<Type />
					</div>
					<div className="re-div">
						<Link
							to="about"
							smooth
							duration={500}
							className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
						>
							About Me
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight size={25} className="ml-3" />
							</span>
						</Link>
						<button onClick={handleResumeDawnload}>
							<a href={Danish} download className="ResumeBtn_2">
								Resume ↓
							</a>
						</button>
					</div>
				</div>
				<div>
					<img
						src={dp}
						alt="my profile"
						className="rounded-2xl mx-auto w-2/3 md:w-half"
						id="profile"
					/>
				</div>
			</div>
		</div>
	);
};
export default Home;
