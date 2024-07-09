import React, { useState } from "react";

export default function index() {
  const [count, setCount] = useState(0);
  return (
    <>
      useState hook perfect Example
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increase me</button>
      <button onClick={() => setCount(count - 1)}>Decrease me</button>
      <h1>hello world</h1>
    </>
  );
}
