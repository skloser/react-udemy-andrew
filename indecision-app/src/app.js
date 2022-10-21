class IndecisionApp extends React.Component {
	render() {
		const title = "Indecision";
		const subTitle = "Put your life in the hands of a computer";
		const options = ["Thing 1", "Thing 2", "Thing 4"];

		return (
			<div>
				<Header title={title} subtitle={subTitle} />
				<Action />
				<Options options={options} />
				<AddOption />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subTitle}</h2>
			</div>
		);
	}
}

class Action extends React.Component {
	handleClick() {
		alert("HandlePick");
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>What should I do?</button>
			</div>
		);
	}
}

class Options extends React.Component {
	constructor(props) {
		super(props);
		this.handleRemoveAll = this.handleRemoveAll.bind(this);
	}

	handleRemoveAll() {
		console.log(this.props.options);
		alert("Remove all handle");
	}

	render() {
		return (
			<div>
				<button onClick={this.handleRemoveAll}>Remove all</button>
				{this.props.options.map((o) => (
					<Option key={o} text={o} />
				))}
			</div>
		);
	}
}

class Option extends React.Component {
	render() {
		return <p>{this.props.text}</p>;
	}
}

class AddOption extends React.Component {
	handleAddOption(e) {
		e.preventDefault();

		const option = e.target.elements.option.value.trim();

		if (option) {
			alert(option);
		}
	}

	render() {
		return (
			<form onSubmit={this.handleAddOption}>
				<input type="text" id="option" name="option" />
				<button>Add Option</button>
			</form>
		);
	}
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
