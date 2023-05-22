import React from "react";
import { useState } from "react";

export const Todolist = () => {
  const [todolist, setTododlist] = useState([]);
  const [newtask, setNewtask] = useState("");

  const handlechange = (event) => {
    setNewtask(event.target.value);
  };
  const addtask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: newtask,
    };
    setTododlist([todolist, ...newtask]);
  };
  const delet = (id) => {
    setTododlist(todolist.filter((task) => task.id !== id));
  };

  return (
    <div>
      <div>
        <input onChange={handlechange} />
      </div>

      <button onClick={addtask}>add task</button>

      {todolist.map((task) => {
        return (
          <div>
            <h1>{task.taskName}</h1>
            <button onClick={() => delet(task.id)}>x</button>;
          </div>
        );
      })}
    </div>
  );
};
