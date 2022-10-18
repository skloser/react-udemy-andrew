console.log("App.js is running!");

const app = {
	title: "Stocks",
	subtitle: "Want more?",
	options: [],
};

const onFormSubmit = (e) => {
	e.preventDefault();

	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = "";
	}
	renderApp();
};

const onRemoveAll = () => {
	app.options = [];
	renderApp();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

const appRoot = document.getElementById("app");

const renderApp = () => {
	const template = (
		<div>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>
				{app.options && app.options.length
					? "Here are your options"
					: "No options"}
			</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>
				What should I do?
			</button>
			<button onClick={onRemoveAll}>Remove all</button>
			<ol>
				{app.options.map((o) => {
					return <li key={o}>{o}</li>;
				})}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" id="option" />
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render(template, appRoot);
};

renderApp();
