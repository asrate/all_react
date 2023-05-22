import React from "react";
import { useState } from "react";

export const User = () => {
  const [todolist, setTododlist] = useState([]);
  const [newtask, setNewtask] = useState("");

  const addtask = () => {
    setTododlist([todolist, ...newtask]);
  };
  const handle = (event) => {
    setNewtask(event.target.value);
  };
  const delet = (task) => {
    setTododlist(todolist.filter((task) => task !== newtask));
  };
  return (
    <div>
      <div>
        <input onChange={handle} />

        <button onClick={addtask}> addtask</button>
      </div>

      <div>
        {todolist.map((task) => {
          return (
            <div>
              <p>{task}</p>
              <button onClick={() => delet(task)}>x</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
