import React, { useContext, useState } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const AddNoteForm = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const { dispatch } = useContext(NotesContext);
	const position = useMousePosition();

	const addNote = (e) => {
		e.preventDefault();
		const note = { title, body };
		dispatch({ type: "ADD_NOTE", note });
		setTitle("");
		setBody("");
	};

	return (
		//Fragment
		<>
			<p>
				Add note {position.x}, {position.y}
			</p>
			<form onSubmit={addNote}>
				<input
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					type="text"
				/>
				<textarea value={body} onChange={(e) => setBody(e.target.value)} />
				<button>add note</button>
			</form>
		</>
	);
};

export default AddNoteForm;
