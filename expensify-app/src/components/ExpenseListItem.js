import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
	<div>
		<p>
			<Link to={`/edit/${id}`}>Description: {description}</Link>
		</p>
		<h3>Amount: {amount}</h3>
		<p>CreatedAt: {createdAt}</p>
	</div>
);

export default ExpenseListItem;
