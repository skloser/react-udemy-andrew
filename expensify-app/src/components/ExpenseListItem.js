import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
	<div>
		<p>
			<Link to={`/edit/${id}`}>Description: {description}</Link>
		</p>
		<h3>Amount: {numeral(amount / 100).format("$0,0.00")}</h3>
		<p>CreatedAt: {moment(createdAt).format("MMMM Do, YYYY")}</p>
	</div>
);

export default ExpenseListItem;
