import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE

const addExpense = ({
	description = "",
	note = "",
	amount = 0,
	createdAt = 0,
} = {}) => ({
	type: "ADD_EXPENSE",
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt,
	},
});

//REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id,
});

//EDIT_EXPENSE

const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates,
});

//SET_TEXT_FILTER

const setTextFilter = (text = "") => ({
	type: "SET_TEXT_FILTER",
	text,
});

//SORT_BY_DATE

const sortByDate = () => ({
	type: "SORT_BY_DATE",
});

//SORT_BY_AMOUNT

const sortByAmount = () => ({
	type: "SORT_BY_AMOUNT",
});

//SET_END_DATE

const setEndDate = (endDate) => ({
	type: "SET_END_DATE",
	endDate,
});

//SET_START_DATE

const setStartDate = (startDate) => ({
	type: "SET_START_DATE",
	startDate,
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return [...state, action.expense];
		case "REMOVE_EXPENSE":
			return state.filter(({ id }) => id !== action.id);
		case "EDIT_EXPENSE":
			return state.map((expense) => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates,
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

const filtersReducerDefaultState = {
	text: "rent",
	sortBy: "amount", //date or amount
	startDate: undefined,
	endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case "SET_TEXT_FILTER":
			return {
				...state,
				...action,
			};
		case "SORT_BY_DATE":
			return {
				...state,
				sortBy: "date",
			};
		case "SORT_BY_AMOUNT":
			return {
				...state,
				sortBy: "amount",
			};
		case "SET_END_DATE":
			return {
				...state,
				endDate: action.endDate,
			};
		case "SET_START_DATE":
			return {
				...state,
				startDate: action.startDate,
			};
		default:
			return state;
	}
};

const getVisibleExpense = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter((expense) => {
			const startDateMatch =
				typeof startDate !== "number" || expense.createdAt >= startDate;
			const endDateMatch =
				typeof endDate !== "number" || expense.createdAt <= endDate;
			const textMatch = expense.description
				.toLowerCase()
				.includes(text.toLocaleLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy == "date") {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy == "amount") {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer,
	})
);

store.subscribe(() => {
	const state = store.getState();

	const visibleExpenses = getVisibleExpense(state.expenses, state.filters);

	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
	addExpense({ description: "Rent", amount: 100, createdAt: -121 })
);

const expenseTwo = store.dispatch(
	addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);

const expenseThree = store.dispatch(
	addExpense({ description: "Rent2", amount: 101, createdAt: 900 })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(
// 	editExpense(expenseTwo.expense.id, { amount: 500, description: "Updated" })
// );

store.dispatch(setTextFilter("e"));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

//store.dispatch(sortByDate());

store.dispatch(setStartDate(-1001));

store.dispatch(setEndDate(10001));
