import { useState, useEffect } from "react";
import { addNumbers } from "@wh/shared";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    setSum(addNumbers(1, 2));
  }, []);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>sum is {sum}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
