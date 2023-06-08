import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const deleteButton = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="border border-gray-400 w-10/12 rounded-md m-8 lg:w-2/12 lg:inline-block lg:my-2 lg:ml-16 p-4 h-fit overflow-auto">
      <h1 className="text-start block text-gray-600 font-semibold my-2">
        {props.title}
      </h1>
      <p className="h-max">{props.content}</p>
      <button
        className=" float-right mt-4 lg:mt-4 rounded-3xl bg-neutral-200 w-16 h-7"
        onClick={deleteButton}
      >
        <DeleteOutlineIcon className=" text-yellow-400 " />
      </button>
    </div>
  );
};

export default Note;
