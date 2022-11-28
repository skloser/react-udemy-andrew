import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(
	addExpense({ description: "Water bill", amount: 100, createdAt: -200 })
);

store.dispatch(
	addExpense({ description: "Gas bill", amount: 300, createdAt: 1200 })
);

store.dispatch(
	addExpense({ description: "rent", amount: 1100, createdAt: 200 })
);

store.dispatch(setTextFilter("Gas"));
store.dispatch(sortByDate());

console.log(
	getVisibleExpenses(store.getState().expenses, store.getState().filters)
);

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
