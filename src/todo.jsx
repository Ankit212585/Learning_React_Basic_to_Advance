// import React, { useState } from "react";
import Name from "./Todo Components/Name";
import Addtodo from "./Todo Components/Addtodo";
import TodoItem from "./Todo Components/todoItem";
import WelMsg from "./Todo Components/WelMsg";
import TodoitemContextProvider from "./Todo Components/Todolistfromitem";

export default function Todo() {
  return (
    <>
      <TodoitemContextProvider>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <center
            style={{
              width: "800px",
              boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
              marginTop: "50px",
              borderRadius: "10px",
            }}
          >
            <Name />
            <Addtodo />
            <TodoItem />
            <WelMsg />
          </center>
        </div>
      </TodoitemContextProvider>
    </>
  );
}
