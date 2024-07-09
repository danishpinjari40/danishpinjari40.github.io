import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Row } from 'react-bootstrap';

function Github() {
	const selectLastHalfYear = (contributions) => {
		const currentYear = new Date().getFullYear();
		const currentMonth = new Date().getMonth();
		const shownMonths = 12;

		return contributions.filter((day) => {
			const date = new Date(day.date);
			const monthOfDay = date.getMonth();

			return (
				date.getFullYear() === currentYear &&
				monthOfDay > currentMonth - shownMonths &&
				monthOfDay <= currentMonth
			);
		});
	};
	return (
		<Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
			<h1 className="project-heading" style={{ paddingBottom: '20px' }}>
				How Much I <strong className="teal">Code</strong>
			</h1>

			<GitHubCalendar
				username="danishpinjari40"
				// transformData={selectLastHalfYear}
				blockSize={15}
				blockMargin={5}
				color="#40AABF"
				fontSize={16}
				hideColorLegend
				// hideTotalCount
			/>
			
		</Row>
	);
}

export default Github;
