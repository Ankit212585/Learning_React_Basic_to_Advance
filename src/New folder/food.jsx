import React, { useState } from "react";
import FoodItem from "../foodComponents/foodItem";
import Errormsg from "../foodComponents/Errormsg";
import "../app.css";
import FoodInput from "../foodComponents/foodInput";
export default function food() {
  const [foodItems, setFoodItems] = useState(["a", "b"]);

  const handleChang = (e) => {
    if (e.key === "Enter") {
      let itemFood = e.target.value;
      e.target.value = "";
      let newFooditem = [...foodItems, itemFood];
      setFoodItems(newFooditem);
    }
  };

  return (
    <>
      <div className="Container">
        <div className="Container-1">
          <h1>Healthy Food App</h1>

          <FoodInput handleChang={handleChang} />
          <Errormsg item={foodItems} />
          <FoodItem item={foodItems} />
        </div>
      </div>
    </>
  );
}
