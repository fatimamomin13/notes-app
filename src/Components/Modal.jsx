import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

const Modal = (props) => {
  const [editedNote, setEditedNote] = useState({
    title: props.edit.title,
    content: props.edit.content,
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setEditedNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addEditedNote = () => {
    if (editedNote.title === "" && editedNote.content === "") {
      alert("empty note cannot be added!");
    } else {
      props.passEditedNote(editedNote, props.editID);
      props.onClose();
    }
  };

  const closeButton = () => {
    props.onClose();
  };

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <form className="rounded px-8 pt-6 pb-8 w-full">
              <input
                className="text-start block text-gray-500 font-sans text-lg font-bold placeholder:text-gray-500 placeholder:font-semibold w-full"
                type="text"
                name="title"
                onChange={InputEvent}
                value={editedNote.title}
              />
              <textarea
                className="mt-2 p-2 text-base placeholder:text-gray-400 w-full placeholder:italic h-fit"
                name="content"
                onChange={InputEvent}
                value={editedNote.content}
              ></textarea>
            </form>
            <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 bg-gray-200 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-3 mb-1 w-24 h-10"
                type="button"
                onClick={closeButton}
              >
                Close
              </button>
              <button
                className="text-white bg-gray-200 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-24 h-10"
                type="button"
                onClick={addEditedNote}
              >
                <AddIcon className=" text-yellow-400 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
