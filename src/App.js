import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: "INC" });
  };
  const decrement = () => {
    dispatch({ type: "DEC" });
  };
  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment} style={{ marginRight: "10px" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: "10px" }}>
        Decrement
      </button>
      <button onClick={addBy}>Add by 10</button>
    </div>
  );
}

export default App;
