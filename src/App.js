import "./App.css";
import { User } from "./User";

function App() {
  const user = [
    { name: "kebe", age: 12 },
    { name: "abe", age: 45 },
  ];
  return (
    <div className="App">
      {user.map((user, key) => {
        return (
          <div>
            <User name={user.name} age={user.age} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
