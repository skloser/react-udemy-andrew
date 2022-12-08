import moment from "moment";
import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

const expensesReducerDefaultState = [
	{
		id: "1",
		description: "Gems",
		note: "",
		amount: 120,
		createdAt: moment(0),
	},
];

test("should reduce add expense", () => {
	const action = {
		type: "ADD_EXPENSE",
		expense: {
			id: "2",
			description: "Coins",
			note: "",
			amount: 110,
			createdAt: moment(0).add(4, "days").valueOf(),
		},
	};

	const result = expenseReducer(expensesReducerDefaultState, action);

	expect(result).toEqual([...expensesReducerDefaultState, action.expense]);
});

test("should reduce remove expense", () => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: "1",
	};

	const result = expenseReducer(expensesReducerDefaultState, action);

	expect(result).toEqual([]);
});

test("should reduce edit expense", () => {
	const action = {
		type: "EDIT_EXPENSE",
		id: "1",
		updates: {
			description: "Coins",
			note: "",
			amount: 110,
			createdAt: moment(0).add(4, "days").valueOf(),
		},
	};

	const result = expenseReducer(expensesReducerDefaultState, action);

	expect(result).toEqual([
		{
			description: "Coins",
			note: "",
			amount: 110,
			createdAt: moment(0).add(4, "days").valueOf(),
			id: "1",
		},
	]);
});

test("should set expenses", () => {
	const action = {
		type: "SET_EXPENSES",
		expenses,
	};

	const result = expenseReducer(expenses, action);
	expect(result).toEqual(expenses);
});
