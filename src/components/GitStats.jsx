import React from 'react';
import { Box, Image, Link } from '@chakra-ui/react';
import '../App.css';

const GitStats = () => (
	<Box background="#0a192f">
		<Box
			display="grid"
			gridTemplateColumns="repeat(2, 1fr)"
			gap="10px"
			margin="auto"
			justifyContent="center"
			className="@media screen and (max-width: 600px) { div { grid-template-columns: 1fr; } }"
			align="center"
			width="80%"
		>
			<Link href="https://github.com/danishpinjari40">
				<Image
					src="https://github-readme-stats.vercel.app/api/top-langs/?username=danishpinjari40&theme=algolia"
					alt="git_stats"
				/>
			</Link>
			<Link href="https://github.com/danishpinjari40">
				<Image
					src="https://github-readme-streak-stats.herokuapp.com/?user=danishpinjari40&theme=algolia&show_icons=true"
					alt="git_stats"
				/>
			</Link>
			<Link href="https://github.com/danishpinjari40">
				<Image
					src="https://github-readme-stats.vercel.app/api?username=danishpinjari40&count_private=true&show_icons=true&theme=algolia"
					alt="git_stats"
				/>
			</Link>
			<Link href="https://github.com/danishpinjari40">
				<Image
					src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=danishpinjari40&amp;theme=tokyonight"
					alt="git_stats"
				/>
			</Link>
		</Box>
	</Box>
);

export default GitStats;
