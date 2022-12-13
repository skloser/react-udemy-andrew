import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import NoteApp from "./components/NoteApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NoteApp></NoteApp>);

reportWebVitals();

// const App = (props) => {
// 	// const [count, setCount] = useState(props.count);
// 	// const [text, setText] = useState("");

// 	const [state, setState] = useState({
// 		count: props.count,
// 		text: "",
// 	});

// 	return (
// 		<div>
// 			<p>
// 				The current {state.text || "count"} is {state.count}
// 			</p>
// 			<button onClick={() => setState({ count: state.count + 1 })}>+1</button>
// 			<button onClick={() => setState({ count: state.count - 1 })}>-1</button>
// 			<button onClick={() => setState({ count: 0 })}>reset</button>
// 			<input
// 				value={state.text}
// 				type="text"
// 				onChange={(e) => setState({ text: e.target.value })}
// 			/>
// 		</div>
// 	);
// };

// const App = (props) => {
// 	const [count, setCount] = useState(props.count);
// 	const [text, setText] = useState("");

// 	//With empty array it runs only once - componentDidMount
// 	useEffect(() => {
// 		console.log("This should run only once");
// 	}, []);

// 	useEffect(() => {
// 		console.log("useEffect ran");
// 		document.title = count;
// 	}, [count]);

// 	const increment = () => {
// 		setCount(count + 1);
// 	};

// 	const decrement = () => {
// 		setCount(count - 1);
// 	};

// 	const reset = () => {
// 		setCount(0);
// 	};

// 	return (
// 		<div>
// 			<p>
// 				The current {text || "count"} is {count}
// 			</p>
// 			<button onClick={increment}>+1</button>
// 			<button onClick={decrement}>-1</button>
// 			<button onClick={reset}>reset</button>
// 			<input
// 				value={text}
// 				type="text"
// 				onChange={(e) => setText(e.target.value)}
// 			/>
// 		</div>
// 	);
// };

// App.defautProps = { count: 0 };
