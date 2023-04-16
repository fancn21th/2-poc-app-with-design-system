import { useState } from "react";
import "./App.css";
import { Button as WhButton } from "@wh/design-system";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React + Design System</h1>
      <div>
        <h2>
          Button from <span>@wh/design-system</span>
        </h2>
        <WhButton
          label="hi"
          onClick={() => {
            console.log("hi");
          }}
        ></WhButton>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
