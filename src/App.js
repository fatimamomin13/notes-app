import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import NewNote from "./Components/NewNote";
import Note from "./Components/Note";
import Modal from "./Components/Modal";
function App() {
  const [newNote, setNewNote] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState({
    title: "",
    content: "",
  });
  const [editID, setEditID] = useState(0);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));

    if (savedNotes) {
      setNewNote(savedNotes);
    }
  }, []);

  // useEffect(() => {
  //   const savedNotes = JSON.parse(localStorage.getItem("notes-data"));

  //   if (savedNotes) {
  //     setNewNote(savedNotes);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(newNote));
  }, [newNote]);

  const addNote = (note) => {
    setNewNote((prev) => {
      return [...prev, note];
    });
  };

  const addEditedNote = (editedNote, id) => {
    const updatedNewNote = newNote.map((value, idx) =>
      idx === id ? editedNote : value
    );
    setNewNote(updatedNewNote);
  };

  const deleteNote = (id) => {
    setNewNote(newNote.filter((value, index) => index !== id));
  };

  const editNote = (id) => {
    setNoteToEdit(newNote[id]);
    setEditID(id);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <Header />
      <NewNote passNote={addNote} />
      {showModal ? (
        <Modal
          edit={noteToEdit}
          editID={editID}
          onClose={closeModal}
          passEditedNote={addEditedNote}
        />
      ) : null}
      {newNote.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        );
      })}
    </>
  );
}

export default App;
