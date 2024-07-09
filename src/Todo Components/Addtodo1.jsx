import React from "react";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoContextItem } from "./Todolistfromitem";

export default function Addtodo1({ todoName, todoDate }) {
  const { handleDelet } = useContext(TodoContextItem);
  return (
    <>
      <div className="container text-center">
        <div style={{ margin: "30px 0px" }} className="row">
          <div className="col-4">{todoName}</div>
          <div className="col-4">{todoDate} </div>
          <div className="col-2">
            <button
              style={{
                padding: "5px 20px",
                borderRadius: "5px",
              }}
              onClick={() => handleDelet(todoName, todoDate)}
              type="button"
              className="btn btn-outline-danger"
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
