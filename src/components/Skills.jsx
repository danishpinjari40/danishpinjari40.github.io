import React from 'react';

import CSS from '../assets/TechStack/CSS.png';
import node from '../assets/TechStack/node.js.png'

const Skills = () => {
	return (
		<div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300" id='main_container'>
			{/* Container */}
			<div className="max-w-[800px] mx-auto p-4 flex flex-col justify-center w-full h-full" id='sub_cont'>
				<div className=" w-full flex justify-center items-center flex-col">
					<p className="text-4xl font-bold inline border-b-4 border-cyan-500 text-center " id='sk_h'>
						Skills
					</p>
					<p className="py-1 text-2xl" id='sk_p'>
						The
						technologies I've used are listed below.
					</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8" id='skills'>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="tech-Stack-img"
							src="https://cdn3d.iconscout.com/3d/free/thumb/html-5728485-4781249.png"
							alt="HTML"
						/>
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img  style={{
                            width:'90%',
                            margin:'auto',
                            marginTop:'20px'
                        }} src={CSS} alt="CSS" />
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						
                        <img src="https://cdn3d.iconscout.com/3d/free/thumb/javascript-logo-6563586-5453022.png" alt="" />
                        <p className="my-4">JAVASCRIPT</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src="https://cdn3d.iconscout.com/3d/free/thumb/react-native-5562339-4642743.png" alt="" />
						<p className="my-4">REACT</p>

					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img src="https://cdn3d.iconscout.com/3d/free/thumb/github-2-5645861-4695719.png" alt="Github" />
                        <p className="my-4">GITHUB</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img src={node} alt="node.js" />
                        <p className="my-4">NODE JS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/redux-283024.png" alt="" />
						<p className="my-4">Redux</p>
					</div>
                
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src="https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/505/265/square_480/chakra-lv1.png" alt="Chakra.UI" />
						<p className="my-4">Chakra.UI</p>
					</div>
                   
					
				</div>
			</div>
		</div>
	);
};
export default Skills;
