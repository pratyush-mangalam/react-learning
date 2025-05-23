import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5;

  const addValue = () => {
    console.log("Value added", counter);
    setCounter(counter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    if (counter == 0) {
      counter = 0;
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Count value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
    </>
  );
}

export default App;
