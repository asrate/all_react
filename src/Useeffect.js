import React, { useEffect, useState } from "react";

export const Useeffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("log");
  });
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>
      <h1>{count}</h1>
    </div>
  );
};
