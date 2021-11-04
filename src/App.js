import React, {useState, useEffect, useRef} from 'react';

import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(value);
  }, [value]);

  function submit() {
    console.log(inputRef.current.value)
  }

  return (
    <div className="App">
      <div className="input-div">
        <input 
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Submit</button>
        <input 
          type="text"
          ref={inputRef}
        />
        <button onClick={submit}>Submit</button>
      </div>
      {value}
    </div>
  )
}

export default App;
