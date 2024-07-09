import React from "react";

export default function ReactStart() {
  const A1 = () => {
    return alert("hello world");
  }; //Here is create a arrow function

  const myArr = ["apple", "kela", "orange"]; //Here is create a array and using the map loop

  function clack(a, b) {
    const add = a + b;
    const sub = a - b;
    const multi = a * b;
    const devide = a / b;
    return [add, sub, multi, devide];
  }

  return (
    <>
      <div>
        <h1>hello world</h1>
        <button onClick={() => A1()}>click me</button>

        {myArr.map(
          (
            item //here we are using the map loop
          ) => (
            <p>{item}</p>
          )
        )}
        <p>{clack(4, 8)}</p>
      </div>
    </>
  );
}
