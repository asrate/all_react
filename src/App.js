import "./App.css";

function App() {
  return (
    <div className="App">
      <Jop salary={2343} position="head" company="gobe" />
    </div>
  );
}
const Jop = (props) => {
  return (
    <div>
      <p>{props.salary}</p>
      <p>{props.position}</p>
      <p>{props.company}</p>
    </div>
  );
};

export default App;
