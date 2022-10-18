const app = {
	title: "Visibility Toggle",
	details: "This is now showing",
	toggled: false,
};

const onToggleDetails = () => {
	app.toggled = !app.toggled;
	render();
};

const appRoot = document.getElementById("app");

const render = () => {
	const template = (
		<div>
			<h1>{app.title}</h1>
			<button onClick={onToggleDetails}>
				{app.toggled ? "Hide" : "Show"} details
			</button>
			{app.toggled && <p>{app.details}</p>}
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();
