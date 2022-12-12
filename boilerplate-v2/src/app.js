import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import LoadingPage from "./components/LoadingPage";
import configureStore from "./store/configureStore";
import { login, logout } from "./actions/auth";
import { getAuth } from "firebase/auth";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import "./firebase/firebase";

const store = configureStore();

// store.subscribe(() => {
// 	console.log(store.getState());
// });

// store.dispatch(
// 	addExpense({ description: "Water bill", amount: 100, createdAt: -200 })
// );

// store.dispatch(
// 	addExpense({ description: "Gas bill", amount: 300, createdAt: 1200 })
// );

// store.dispatch(
// 	addExpense({ description: "rent", amount: 1100, createdAt: 200 })
// );

// store.dispatch(setTextFilter("Gas"));
// store.dispatch(sortByDate());

// console.log(
// 	getVisibleExpenses(store.getState().expenses, store.getState().filters)
// );

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;

const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById("app"));
		hasRendered = true;
	}
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

getAuth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid));
		renderApp();
		if (history.location.pathname === "/") {
			history.push("/dashboard");
		}
	} else {
		store.dispatch(logout());
		renderApp();
		history.push("/");
	}
});
