import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Upload_section from './components/Upload_section';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Uploaded_images from './components/Upload_images';
import Api from './services/Api';

function App() {
  const [count, setCount] = useState([]);
  const fetchCount = async () => {
    try {
      const response = await Api.getCount();
      setCount(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {

    fetchCount();
  }, []);

  return (

    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Upload_section />} />
            <Route path="/Uploaded_images" element={ <Uploaded_images />}/>
          </Routes>
          <ToastContainer position="top-right" autoClose={3000} />
        </header>
      </div>
    </Router>

  );
}

export default App;
