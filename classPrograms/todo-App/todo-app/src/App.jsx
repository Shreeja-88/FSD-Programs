import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function NoteItem({ note, onDelete }) {
  const { dark } = useContext(ThemeContext);

  return (
    <li style={{ margin: "10px", color: dark ? "white" : "black" }}>
      {note.text}
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </li>
  );
}

function ThemeToggle() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    document.title = `Notes (${notes.length})`;
  }, [notes]);

  function addNote() {
    if (!text.trim()) return;
    setNotes([...notes, { id: Date.now(), text: text.trim() }]);
    setText("");
  }

  function deleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <>
      <h1>My Notes</h1>
      <ThemeToggle />
      <br /><br />

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter a note"
      />
      <button onClick={addNote}>Add Note</button>

      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <ul>
          {notes.map(note => (
            <NoteItem key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </ul>
      )}
    </>
  );
}