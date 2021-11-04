import React, { useState } from "react";

import "./App.css";

function CustomHooksUsingObjectFormat(initialState) {
  const [value, setValue] = useState(initialState);

  function onChange(e) {
    setValue(e.target.value);
  };

  function clearInput() {
    setValue("");
  }

  return {value, onChange, clearInput}
};

function App() {
  const firstName = CustomHooksUsingObjectFormat("");
  const lastName = CustomHooksUsingObjectFormat("");
  const email = CustomHooksUsingObjectFormat("");
  const telephone = CustomHooksUsingObjectFormat("");

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(telephone)
    firstName.clearInput()
    lastName.clearInput()
    email.clearInput()
    telephone.clearInput()

  }

  return (
    <div className="app">
      <form onSubmit={handleOnSubmit}>
        <input 
          type="text" 
          placeholder="first name"
          {...firstName}
        />
        <br />
        <input 
          type="text" 
          placeholder="last name"
          {...lastName}
        />
        <br />
        <input 
          type="email" 
          placeholder="email"
          {...email}
        />
        <br />
        <input 
          type="tel" 
          placeholder="enter contact number" 
          {...telephone}
        />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
