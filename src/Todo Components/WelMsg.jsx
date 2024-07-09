import React from "react";
import { useContext } from "react";
import { TodoContextItem } from "./Todolistfromitem";

export default function WelMsg() {
  const { todolist } = useContext(TodoContextItem);

  return (
    <>
      {todolist.length === 0 ? (
        <h4 style={{ color: "crimson", margin: "20px 0px" }}>
          Get Up and start your day
        </h4>
      ) : null}
    </>
  );
}
