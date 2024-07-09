import React, { useState } from "react";
import Item from "./item";

export default function foodItem({ item }) {
  const [activeitem, setActiveitem] = useState([]);

  let onBuybutton = (item, event) => {
    let newItems = [...activeitem, item];
    setActiveitem(newItems);
  };
  return (
    <>
      <ul className="list-group list-group-flush">
        {item.map((item) => (
          <Item
            key={item}
            foodItem={item}
            bought={activeitem.includes(item)}
            BuybuttonClicked={(event) => onBuybutton(item, event)}
          />
        ))}
      </ul>
    </>
  );
}
