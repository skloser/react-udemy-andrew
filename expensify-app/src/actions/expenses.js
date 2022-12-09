import { update } from "firebase/database";
import database, {
	ref,
	push,
	getDatabase,
	get,
	remove,
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

export const startRemoveExpense = (id) => {
	return (dispatch) => {
		const dbRef = ref(getDatabase());
		return remove(dbRef, "expenses/" + id).then(() => {
			dispatch(removeExpense(id));
		});
	};
};

//EDIT_EXPENSE

export const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates,
});

export const startEditExpense = (id, data) => {
	return (dispatch) => {
		const dbRef = ref(getDatabase());
		const updates = {};

		updates["/expenses/" + id] = data;

		return update(dbRef, updates).then(() => {
			dispatch(editExpense(id, data));
		});
	};
};

// SET_EXPENSES

export const setExpenses = (expenses) => ({
	type: "SET_EXPENSES",
	expenses,
});

export const startSetExpenses = () => {
	return (dispatch) => {
		const dbRef = ref(getDatabase());

		return get(child(dbRef, "expenses")).then((snapshot) => {
			const expenses = [];
			snapshot.forEach((expenseChildSnapshot) => {
				expenses.push({
					id: expenseChildSnapshot.key,
					...expenseChildSnapshot.val(),
				});
			});

			dispatch(setExpenses(expenses));
		});
	};
};
