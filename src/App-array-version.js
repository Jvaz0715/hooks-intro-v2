import React from "react";
import CustomHooksUsingArraysForm from "./hooks/inputHooks";
import "./App.css";

function App() {
  const [firstName, firstNameOnChange, clearFirstNameInput] = CustomHooksUsingArraysForm("");
  const [lastName, lastNameOnChange, clearLastNameInput] = CustomHooksUsingArraysForm("");
  const [email, emailOnChange, clearEmailInput] = CustomHooksUsingArraysForm("");
  const [telephone, telephoneOnChange, clearTelephoneInput] = CustomHooksUsingArraysForm("");

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(firstName)
    console.log(lastName)
    console.log(email)
    console.log(telephone)
    clearFirstNameInput()
    clearLastNameInput()
    clearEmailInput()
    clearTelephoneInput()
  }

  return (
    <div className="app">
      <form onSubmit={handleOnSubmit}>
        <input 
          type="text" 
          placeholder="first name"
          value={firstName}
          onChange={(e) => firstNameOnChange(e)}
        />
        <br />
        <input 
          type="text" 
          placeholder="last name"
          value={lastName}
          onChange={(e) => lastNameOnChange(e)}
        />
        <br />
        <input 
          type="email" 
          placeholder="email"
          value={email}
          onChange={(e) => emailOnChange(e)}
        />
        <br />
        <input 
          type="tel" 
          placeholder="enter contact number" 
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={telephone}
          onChange={(e) => telephoneOnChange(e)}
        />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
