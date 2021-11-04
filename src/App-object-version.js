import React from "react";
import CustomHooksUsingObjectFormat from "./hooks/inputHooksObjectForm";
import "./App.css";

function App() {
  /*
    because the spread operator inside the html render renders all properties of our hooks and some
    are not dom properties, we instead deconstruct and rename the properties below and use just the names
  */ 
  const {
    value: firstName,
    clearInput: clearFirstNameInput,
    onChange: firstNameOnChange,
  } = CustomHooksUsingObjectFormat("");
  
  const {
    value: lastName,
    clearInput: clearLastNameInput,
    onChange: lastNameOnChange,
  } = CustomHooksUsingObjectFormat("");
  
  const {
    value: email,
    clearInput: clearEmailInput,
    onChange: emailOnChange,
  } = CustomHooksUsingObjectFormat("");
  
  const {
    value: telephone,
    clearInput: clearTelephoneInput,
    onChange: telephoneOnChange,
  } = CustomHooksUsingObjectFormat("");


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
          onChange={firstNameOnChange}
        />
        <br />
        <input 
          type="text" 
          placeholder="last name"
          value={lastName}
          onChange={lastNameOnChange}
        />
        <br />
        <input 
          type="email" 
          placeholder="email"
          value={email}
          onChange={emailOnChange}
        />
        <br />
        <input 
          type="tel" 
          placeholder="enter contact number" 
          value={telephone}
          onChange={telephoneOnChange}
        />
        <br />
        <button type="Submit">Submit</button>
      </form>
    </div>
  )
}

export default App;
