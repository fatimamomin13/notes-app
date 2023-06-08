import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NewNote from "./Components/NewNote";
import Note from "./Components/Note";

function App() {
  const [newNote, setNewNote] = useState([]);

  const addNote = (note) => {
    setNewNote((prev) => {
      return [...prev, note];
    });
  };

  const deleteNote = (id) => {
    setNewNote(newNote.filter((value, index) => index !== id));
  };

  return (
    <>
      <Header />
      <NewNote passNote={addNote} />
      {newNote.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            onDelete={deleteNote}
          />
        );
      })}
    </>
  );
}

export default App;
