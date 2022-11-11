import React from "react";

const Item = (props) => {
	return (
		<div>
			<h1>Item</h1>
			<div>This item is with id: {props.match.params.id}</div>
		</div>
	);
};

export default Item;
