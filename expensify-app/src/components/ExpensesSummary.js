import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getExpensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";

const ExpensesSummary = (props) => (
	<div>
		<p>Expenses total count: {props.expenses.length}</p>
		<p>{numeral(getExpensesTotal(props.expenses) / 100).format("$0,0.00")}</p>
	</div>
);

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters),
	};
};

export default connect(mapStateToProps)(ExpensesSummary);
