import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ description, amount, createdAt, dispatch, id }) => (
	<div>
		<p>Description: {description}</p>
		<h3>Amount: {amount}</h3>
		<p>CreatedAt: {createdAt}</p>
		<button
			onClick={() => {
				console.log(id);
				dispatch(removeExpense(id));
			}}>
			Remove
		</button>
	</div>
);

export default connect()(ExpenseListItem);
