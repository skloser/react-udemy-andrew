import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let editExpense, removeExpense, history, wrapper;

beforeAll(() => {
	editExpense = jest.fn();
	removeExpense = jest.fn();
	history = { push: jest.fn() };
	wrapper = shallow(
		<EditExpensePage
			editExpense={editExpense}
			removeExpense={removeExpense}
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
	expect(editExpense).toHaveBeenCalledWith(expenses[1].id, expenses[1]);
	expect(history.push).toHaveBeenLastCalledWith("/");
});

test("should handle remove expense", () => {
	wrapper.find("button").simulate("click");
	expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
	expect(history.push).toHaveBeenLastCalledWith("/");
});
