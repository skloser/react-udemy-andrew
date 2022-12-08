import uuid from "uuid";
import database, {
	ref,
	push,
	onValue,
	getDatabase,
	child,
} from "../firebase/firebase";

//ADD_EXPENSE

export const addExpense = (expense) => ({
	type: "ADD_EXPENSE",
	expense,
});

export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		const {
			description = "",
			note = "",
			amount = 0,
			createdAt = 0,
		} = expenseData;
		const expense = { description, note, amount, createdAt };

		return push(ref(database, "expenses"), { expense }).then((expenseRef) => {
			dispatch(
				addExpense({
					id: expenseRef.key,
					...expense,
				})
			);
		});
	};
};

//REMOVE_EXPENSE

export const removeExpense = (id) => ({
	type: "REMOVE_EXPENSE",
	id,
});

//EDIT_EXPENSE

export const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates,
});

// SET_EXPENSES

export const setExpenses = (expenses) => ({
	type: "SET_EXPENSES",
	expenses,
});

export const startSetExpenses = (expenses) => {
	return (dispatch) => {
		const expensesData = [];

		const dbRef = ref(getDatabase());

		get(child(dbRef, "expenses")).then((snapshot) => {
			snapshot.forEach((expenseChildSnapshot) => {
				dispatch(
					setExpenses({
						id: expenseChildSnapshot.key,
						...expenseChildSnapshot.val(),
					})
				);
			});
		});
	};
};
