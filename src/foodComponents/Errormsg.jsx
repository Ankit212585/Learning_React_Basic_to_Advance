import React from "react";

export default function Errormsg({ item }) {
  return (
    <>
      {item.length === 0 ? (
        <h3 style={{ color: "crimson" }}>I'm still hungry!</h3>
      ) : null}
    </>
  );
}
