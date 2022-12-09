import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
	<header>
		<h1>Expensify</h1>
		<NavLink to="/dashboard" activeClassName="is-active">
			Dashboard
		</NavLink>
		<NavLink to="/create" activeClassName="is-active">
			Create exepnse
		</NavLink>
	</header>
);

export default Header;
