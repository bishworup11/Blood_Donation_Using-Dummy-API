// App.js
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {
  // Define state to hold the search bar text
  const [searchText, setSearchText] = useState('');
  const [blood, setBlood] = useState('');

  // Function to update the search bar text
  const handleSearchTextChange = (text,blood) => {
    setSearchText(text);
    setBlood(blood);
  };

 

  return (
    <div className="App">
      <BrowserRouter>
        {/* Pass the function and the search text to Navbar */}
        <Navbar onSearch={handleSearchTextChange} /> {/* Updated prop name */}
        <Routes>
          {/* Pass searchText as a prop to Home */}
          <Route path="/" element={<Home searchText={searchText} blood={blood} />} />
          <Route path="/:id" element={<Profile />} />
          <Route path="/about" element={<About/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
