import React from "react";
import "../app.css";

export default function Item(props, BuybuttonClicked, bought) {
  return (
    <>
      <li
        key={props.foodItem}
        className={`list-group-item ${props.bought && "active"}`}
      >
        {props.foodItem}

        <button
          style={{
            background: "red",
            color: "white",
            float: "right",
            marginLeft: "10px",
          }}
        >
          Delete
        </button>
        <button onClick={props.BuybuttonClicked} className="buy-btn">
          Buy
        </button>
      </li>
    </>
  );
}
