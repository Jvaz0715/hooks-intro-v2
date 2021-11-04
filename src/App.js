import React, { useState, useEffect } from "react";
import axios from "axios";

import Spinner from "./components/Spinner/Spinner";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [singleUser, setSingleUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // todos
  const [searchTodo, setSearchTodo] = useState('');
  
  const [showTodo, setShowTodo] = useState(null);
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    fetchAllUsers();
  }, []); //array will ask it to call it once

  async function fetchSingleUser(number) {
    setIsLoading(true);
    try {
      let result = await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`);
      // console.log(result.data)
      setIsLoading(false)
      setSingleUser(result.data)
    } catch(e) {
      setIsLoading(false)
      console.log(e)
    }
  }

  async function fetchAllUsers() {
    try {
      let results = await axios.get("https://jsonplaceholder.typicode.com/users");

      // console.log(results.data)
      setUser(results.data)
    } catch(e) {
      console.log(e);
    }
  };

  async function handleSearchTodo() {
    try{
      let result = await axios.get(`https://jsonplaceholder.typicode.com/todos/${searchTodo}`);
      setShowTodo(result.data)
      setIsSearching(false)
      setSearchTodo("")
    } catch(e){
      console.log(e)
    }
  }

  function fetchTodo() {
    if(!searchTodo) {
      return;
    }

    setIsSearching(true);
  };

  useEffect(() => {
    if(!searchTodo) {
      return;
    }

    handleSearchTodo()
  },[isSearching]);

  if(!user) {
    return <Spinner />
  };

  return (
    <div className="app">
      <p>Single User</p>
      <div>
        <input 
          type="text"
          // value={singleUser}
          onChange={(e) => setSingleUser(e.target.value)}
        />
        <button onClick={() => fetchSingleUser(singleUser)}>Search User</button>

        {isLoading ? (
            <div>...loading</div>
          ) : (
            <div>
              User Fullname: {singleUser.name}
            </div>
        )}
        <hr/>
        <p>Users</p>
        <ul>
          {user.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })}
        </ul>
        <hr />
      </div>

      <div>
        <p>Todos</p>
          <input
            type="text"
            onChange={(e) => setSearchTodo(e.target.value)}
          />
          <button onClick={fetchTodo}>Search Todos</button>
          {isSearching ? (<p>Fetching...</p>): (<p>{showTodo?.title}</p>)}
      </div>

    </div>
  )
}

export default App;
