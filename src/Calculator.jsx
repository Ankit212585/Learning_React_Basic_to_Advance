import React, { useState } from "react";
import "./app.css";

export default function Calculator() {
  let ourbuttons = [
    "C",
    "-",
    "+",
    "*",
    "/",
    "=",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    "<",
  ];
  const [inputValue, setInputValue] = useState("");
  const handleClick = (keyInput) => {
    if (keyInput === "C") {
      setInputValue("");
    } else if (keyInput === "=") {
      const result = eval(inputValue);
      setInputValue(result);
    } else if (keyInput === "<") {
      const removeValue = inputValue.slice(0, -1);
      setInputValue(removeValue);
    } else {
      const myValue = inputValue + keyInput;
      setInputValue(myValue);
    }
  };

  return (
    <>
      <center>
        <div className="ourCal">
          <h1>Calculator</h1>
          <div>
            <input type="text" value={inputValue} readOnly />
          </div>
          <div className="button-container">
            {ourbuttons.map((item) => (
              <button
                onClick={() => handleClick(item)}
                key={item}
                className="buttons"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </center>
    </>
  );
}
