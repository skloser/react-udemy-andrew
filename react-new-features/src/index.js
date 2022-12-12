import React, { useState, useEffect, useReducer } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const notesReducer = (state, action) => {
	switch (action.type) {
		case "POPULATE_NOTES":
			return action.notes;
		case "ADD_NOTE":
			return [...state, action.note];
		case "REMOVE_NOTE":
			return state.filter((note) => note.title !== action.title);
		default:
			return state;
	}
};

const NoteApp = () => {
	const [notes, dispatch] = useReducer(notesReducer, []);
	//const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	const addNote = (e) => {
		e.preventDefault();
		// setNotes([...notes, { title, body }]);
		const note = { title, body };
		dispatch({ type: "ADD_NOTE", note });
		setTitle("");
		setBody("");
	};

	const removeNote = (title) => {
		// setNotes(notes.filter((x) => x.title !== title));
		dispatch({ type: "REMOVE_NOTE", title });
	};

	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem("notes"));

		if (notes) {
			dispatch({ type: "POPULATE_NOTES", notes });
			//setNotes(notesData);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	return (
		<div>
			<h1>Notes</h1>
			{notes.map((note) => (
				<Note key={note.title} note={note} removeNote={removeNote} />
			))}
			<p>Add note</p>
			<form onSubmit={addNote}>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
				/>
				<textarea value={body} onChange={(e) => setBody(e.target.value)} />
				<button>add note</button>
			</form>
		</div>
	);
};

const Note = (props) => {
	useEffect(() => {
		console.log("Setting up effect");

		return () => {
			console.log("Cleaning up effect");
		};
	}, []);

	return (
		<div key={props.note.title}>
			<h3>{props.note.title}</h3>
			<p>{props.note.body}</p>
			<button onClick={() => props.removeNote(props.note.title)}>x</button>
		</div>
	);
};

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NoteApp></NoteApp>);

reportWebVitals();
