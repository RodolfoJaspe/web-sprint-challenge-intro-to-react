import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.py4e.com/") // ****I'm getting a CORS error and don't know how to resolve it. This is why I haven't been able to finish****
    .then(response => {console.log(response)})
    .catch(err => console.log(err))
  },[]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
