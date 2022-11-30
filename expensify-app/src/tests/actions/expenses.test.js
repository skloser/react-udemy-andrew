import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should remove expense", () => {
	const action = removeExpense("123abc");
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "123abc",
	});
});

test("should edit expense", () => {
	const action = editExpense("123abc", {
		description: "test",
		amount: 100,
	});
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "123abc",
		updates: {
			description: "test",
			amount: 100,
		},
	});
});

test("should add expnse with provided values", () => {
	const expenseData = {
		description: "Rent",
		amount: 109500,
		createdAt: 1000,
		note: "This was last months rent",
	};

	const action = addExpense(expenseData);

	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			...expenseData,
			id: expect.any(String),
		},
	});
});

test("should add expnse with default values", () => {
	const action = addExpense();

	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: {
			id: expect.any(String),
			description: "",
			note: "",
			amount: 0,
			createdAt: 0,
		},
	});
});
