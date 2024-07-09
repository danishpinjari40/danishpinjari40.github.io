import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
	return (
		<Typewriter
			options={{
				strings: ['Front End Developer', 'HTML Developer', 'Tech Enthusiast'],
				autoStart: true,
				loop: true,
				deleteSpeed: 75,
			}}
		/>
	);
}

export default Type;
