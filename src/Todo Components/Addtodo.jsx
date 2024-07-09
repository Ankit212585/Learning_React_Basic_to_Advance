import React, { useRef } from "react";
import { useContext } from "react";
import { TodoContextItem } from "./Todolistfromitem";

export default function Addtodo() {
  const { handleNewItem } = useContext(TodoContextItem);
  const inputName = useRef();
  const DueDate = useRef();
  const handleAddbuttonClick = (e) => {
    e.preventDefault();
    const todoName = inputName.current.value;
    const todoDate = DueDate.current.value;
    inputName.current.value = "";
    DueDate.current.value = "";
    handleNewItem(todoName, todoDate);
  };

  return (
    <>
      <div className="container text-center">
        <form onSubmit={handleAddbuttonClick} className="row">
          <div style={{ margin: "30px 0px" }} className="col-4">
            <input
              style={{
                padding: "5px 20px",
                border: "1px solid lightgray",
                outline: "none",
                borderRadius: "5px",
              }}
              ref={inputName}
              type="text"
              placeholder="Enter Todo Here"
            />
          </div>
          <div style={{ margin: "30px 0px" }} className="col-4">
            <input
              style={{
                padding: "5px 20px",
                border: "1px solid lightgray",
                outline: "none",
                borderRadius: "5px",
              }}
              ref={DueDate}
              type="Date"
            />
          </div>
          <div style={{ margin: "30px 0px" }} className="col-2">
            <button
              style={{
                padding: "5px 30px",
                borderRadius: "5px",
              }}
              type="submit"
              className="btn btn-outline-success"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
