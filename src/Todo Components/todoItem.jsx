import React from "react";
import Addtodo1 from "./Addtodo1";
import { useContext } from "react";
import { TodoContextItem } from "./Todolistfromitem";

export default function todoItem() {
  const { todolist } = useContext(TodoContextItem);

  return (
    <>
      <center className="todo-container">
        {todolist.map((item) => {
          return (
            <Addtodo1
              key={item.Name}
              todoName={item.Name}
              todoDate={item.DueDate}
            />
          );
        })}
      </center>
    </>
  );
}
