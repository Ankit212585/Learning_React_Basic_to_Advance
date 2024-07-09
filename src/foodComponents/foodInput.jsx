import React from "react";

export default function foodInput({ handleChang }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0px",
        }}
      >
        <input
          onKeyDown={handleChang}
          style={{ width: "100%" }}
          type="text"
          placeholder="Enter your food Item"
        />
        {/* <button style={{ background: "Green", color: "white" }}>Add</button> */}
      </div>
    </>
  );
}
