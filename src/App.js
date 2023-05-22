import "./App.css";
// import { Todolist } from "./todo/Todolist";
import { useState } from "react";
import { User } from "./User";
function App() {
  const [age, setAge] = useState("");
  const handel = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="App">
      <User />
      {/* <Todolist /> */}
      {age}
      {/* <input type="text" onChange={handel} /> */}
      {age}
    </div>
  );
}

export default App;
