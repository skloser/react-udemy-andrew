// Higher Order Component (HOC) - A component that renders another component
// Reuse code
// Render hijack
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const widthAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAdmin && <p>This is private info. Please don't share!</p>}
			<WrappedComponent {...props} />
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{props.isAuthenticated ? (
				<div>
					<WrappedComponent {...props} />
				</div>
			) : (
				<p>Please log in to view</p>
			)}
		</div>
	);
};

const AdminInfo = widthAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
// 	<AdminInfo isAdmin={true} info="These are the details" />,
// 	document.getElementById("app")
// );
ReactDOM.render(
	<AuthInfo isAuthenticated={true} info="Please log in" />,
	document.getElementById("app")
);
