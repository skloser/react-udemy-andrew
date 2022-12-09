import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
	startAddExpense,
	addExpense,
	editExpense,
	removeExpense,
	startRemoveExpense,
	setExpenses,
	startEditExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database, {
	getDatabase,
	ref,
	child,
	get,
	set,
	remove,
} from "../../firebase/firebase";
import { update } from "firebase/database";

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = { description, note, amount, createdAt };
	});

	set(ref(database, "expenses"), expensesData).then(() => {
		done();
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
	const action = addExpense(expenses[2]);

	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: expenses[2],
	});
});

test("should add expense to database and store", (done) => {
	const store = createMockStore({});
	const expenseData = {
		description: "Mouse",
		amount: 3000,
		note: "This one is better",
		createdAt: 1000,
	};
	store
		.dispatch(startAddExpense(expenseData))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: "ADD_EXPENSE",
				expense: {
					id: expect.any(String),
					...expenseData,
				},
			});

			const dbRef = ref(getDatabase());
			return get(child(dbRef, `expenses/${actions[0].expense.id}`));
		})
		.then((snapshot) => {
			expect(snapshot.val().expense).toEqual(expenseData);
			done();
		});
});

test("should add expense with defaults to database and store", (done) => {
	const store = createMockStore({});
	const expenseDefaults = {
		description: "",
		note: "",
		amount: 0,
		createdAt: 0,
	};
	store
		.dispatch(startAddExpense({}))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: "ADD_EXPENSE",
				expense: {
					id: expect.any(String),
					...expenseDefaults,
				},
			});

			const dbRef = ref(getDatabase());
			return get(child(dbRef, `expenses/${actions[0].expense.id}`));
		})
		.then((snapshot) => {
			expect(snapshot.val().expense).toEqual(expenseDefaults);
			done();
		});
});

test("should setup set_expenses action object with data", () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: "SET_EXPENSES",
		expenses,
	});
});

test("should remove expense", () => {
	const action = removeExpense("123abc");
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "123abc",
	});
});

test("should remove expense from firebase", (done) => {
	const store = createMockStore({});
	const id = expenses[0].id;

	store
		.dispatch(startRemoveExpense(id))
		.then(() => {
			const actions = store.getActions();
			expect(actions[0]).toEqual({
				type: "REMOVE_EXPENSE",
				id,
			});

			const dbRef = ref(getDatabase());
			return get(child(dbRef, `expenses/${actions[0].id}`));
		})
		.then((snapshot) => {
			expect(snapshot.val()).toBeFalsy();
			done();
		});
});

test("should edit expense from firebase", (done) => {
	const store = createMockStore({});
	const id = expenses[0].id;
	const updates = { description: "new update", note: "note update" };

	store.dispatch(startEditExpense(id, updates)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "EDIT_EXPENSE",
			id,
			updates: {
				description: "new update",
				note: "note update",
			},
		});

		done();
	});
});
