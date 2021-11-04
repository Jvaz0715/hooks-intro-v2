import React, { useState } from "react";
import MouseMove from "./MouseMove";

import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);
  

  return (
    <div className="app">
      <div>
        <button onClick={() => setToggle((prevState) => setToggle(!prevState))}>
          Toggle
        </button>
      </div>
      {
        toggle ? <MouseMove /> : "Click me"
      }
    </div>
  )
}

export default App;
