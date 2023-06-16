import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const NewNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  const addEvent = () => {
    setActive(false);
    if (note.title === "" && note.content === "") {
      alert("Empty Note Cannot Be Added");
    } else {
      props.passNote(note);
      setNote({
        title: "",
        content: "",
      });
    }
  };

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div className="flex justify-center align-center m-4 lg:m-8">
      <form className="shadow-lg shadow-gray-300 border border-gray-400 w-11/12 m-4 lg:w-5/12 p-4 rounded-md">
        <input
          className="text-start block text-gray-500 font-sans text-lg font-bold placeholder:text-gray-500 placeholder:font-semibold w-full"
          type="text"
          placeholder="Title"
          value={note.title}
          name="title"
          onChange={InputEvent}
          style={{ display: active ? "block" : "none" }}
        />
        <textarea
          className="mt-2 p-2 text-base placeholder:text-gray-400 w-full placeholder:italic h-fit"
          placeholder="Take a note..."
          value={note.content}
          name="content"
          onChange={InputEvent}
          onClick={handleClick}
        ></textarea>
        <button
          onClick={addEvent}
          type="button"
          className=" float-right mr-4 rounded-3xl bg-neutral-100 w-16 h-7"
          style={{ display: active ? "block" : "none" }}
        >
          <AddIcon className=" text-yellow-400 " />
        </button>
      </form>
    </div>
  );
};

export default NewNote;
