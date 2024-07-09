import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';
import name from '../assets/name.png';
import Danish from '../assets/Danish Pinjari_Resume.pdf';
import '../App.css';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	// for Resume google drive link for different page
	const handleResumeDawnload = () => {
		window.open(
			'https://drive.google.com/file/d/1tTUz_Rvz4MVSHmi9vnwKlg1zHRYOh2Tk/view?usp=drive_link'
		);
	};

	return (
		<div
			className="fixed w-full h-[80px] flex justify-between items-center px-4 
		bg-[#0a192f] 
		text-gray-300"
		>
			<div>
				<img src={name} alt="Danish Pinjari" width="40%" />
			</div>
			{/* menu */}
			<ul className="hidden md:flex gap-x-8">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="work" smooth={true} duration={500}>
						Project
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
				<li>
					<button onClick={handleResumeDawnload}>
						<a href={Danish} download className="ResumeBtn">
							Resume ↓
						</a>
					</button>
				</li>
			</ul>
			{/* Hamburger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			{/* Mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link onClick={handleClick} to="work" smooth={true} duration={500}>
						Project
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<button onClick={handleResumeDawnload}>
						<a href={Danish} download className="ResumeBtn">
							Resume ↓
						</a>
					</button>
				</li>
			</ul>
			{/* Social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
							onClick={() => {
								window.open('https://www.linkedin.com/in/danishpinjari');
							}}
						>
							linkedin
							<FaLinkedin size={35} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="/"
							onClick={() => {
								window.open('https://github.com/danishpinjari40');
							}}
						>
							Github <FaGithub size={35} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="mailto:danishpinjari40@gmail.com"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]"
						onClick={handleResumeDawnload}
					>
						<a
							className="flex justify-between items-center w-full text-gray-300 ResumeBtn"
							href={Danish}
							download
							onClick={handleResumeDawnload}
						>
							Resume ↓
							<BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Navbar;
