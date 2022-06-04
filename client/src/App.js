import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';


function App() {

  const [data, setdata] = useState("")

  useEffect(() => {
    axios.get("http://localhost:8000").then((response) => {
      setdata(response.data.message)
    })
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
