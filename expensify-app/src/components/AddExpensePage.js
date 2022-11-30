import React from "react";
import ExpnseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
	<div>
		<h1>Add Expense</h1>
		<ExpnseForm
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense));
				props.history.push("/");
			}}
		/>
	</div>
);

export default connect()(AddExpensePage);
