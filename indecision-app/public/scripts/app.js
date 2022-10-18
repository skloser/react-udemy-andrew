"use strict";

console.log("App.js is running!");

var app = {
	title: "Stocks",
	subtitle: "Want more?",
	options: []
};

var onFormSubmit = function onFormSubmit(e) {
	e.preventDefault();

	var option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = "";
	}
	renderApp();
};

var onRemoveAll = function onRemoveAll() {
	app.options = [];
	renderApp();
};

var onMakeDecision = function onMakeDecision() {
	var randomNum = Math.floor(Math.random() * app.options.length);
	var option = app.options[randomNum];
	alert(option);
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
	var template = React.createElement(
		"div",
		null,
		app.subtitle && React.createElement(
			"p",
			null,
			app.subtitle
		),
		React.createElement(
			"p",
			null,
			app.options && app.options.length ? "Here are your options" : "No options"
		),
		React.createElement(
			"button",
			{ disabled: app.options.length === 0, onClick: onMakeDecision },
			"What should I do?"
		),
		React.createElement(
			"button",
			{ onClick: onRemoveAll },
			"Remove all"
		),
		React.createElement(
			"ol",
			null,
			app.options.map(function (o) {
				return React.createElement(
					"li",
					{ key: o },
					o
				);
			})
		),
		React.createElement(
			"form",
			{ onSubmit: onFormSubmit },
			React.createElement("input", { type: "text", name: "option", id: "option" }),
			React.createElement(
				"button",
				null,
				"Add Option"
			)
		)
	);
	ReactDOM.render(template, appRoot);
};

renderApp();
