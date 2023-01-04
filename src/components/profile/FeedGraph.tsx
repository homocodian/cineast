const FeedGraph = () => {
	return (
		<div className="graph scrollbar-hide">
			<ul className="months">
				<li>Jan</li>
				<li>Feb</li>
				<li>Mar</li>
				<li>Apr</li>
				<li>May</li>
				<li>Jun</li>
				<li>Jul</li>
				<li>Aug</li>
				<li>Sep</li>
				<li>Oct</li>
				<li>Nov</li>
				<li>Dec</li>
			</ul>
			<ul className="days">
				<li>Sun</li>
				<li>Mon</li>
				<li>Tue</li>
				<li>Wed</li>
				<li>Thu</li>
				<li>Fri</li>
				<li>Sat</li>
			</ul>
			<ul className="squares">
				{Array.from(Array(355).keys()).map((index) => {
					const level = Math.floor(Math.random() * 3);
					return <li key={index.toString()} data-level={`${level}`}></li>;
				})}
			</ul>
		</div>
	);
};

export default FeedGraph;
