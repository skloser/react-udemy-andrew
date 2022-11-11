import React from "react";
import { Link } from "react-router-dom";

const Portfolio = (props) => {
	return (
		<div>
			<h1>Portfolio</h1>
			<div>These are the item:</div>
			<div>
				<Link to="/portfolio/1">Item 1</Link>
				<Link to="/portfolio/22">Item 2</Link>
			</div>
		</div>
	);
};

export default Portfolio;
