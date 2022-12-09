import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeAll(() => {
	startEditExpense = jest.fn();
	startRemoveExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			startEditExpense={startEditExpense}
			startRemoveExpense={startRemoveExpense}
			history={history}
			expense={expenses[1]}
		/>
	);
});

test("should render Edit expense page", () => {
	expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
	wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
	expect(startEditExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle remove expense", () => {
	wrapper.find("button").simulate("click");
	expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1].id);
	expect(history.push).toHaveBeenLastCalledWith("/");
});
