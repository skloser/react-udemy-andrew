import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Item from "../components/Item";

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header></Header>
			<Switch>
				<Route path="/" component={Home} exact={true}></Route>
				<Route path="/portfolio" component={Portfolio} exact={true}></Route>
				<Route path="/contact" component={Contact}></Route>
				<Route path="/portfolio/:id" component={Item}></Route>
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
