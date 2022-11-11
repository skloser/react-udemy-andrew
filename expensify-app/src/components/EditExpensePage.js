import React from "react";

const EditExpensePage = (props) => {
	console.log(props);
	return <div>Editing expense id with {props.match.params.id}</div>;
};

export default EditExpensePage;
