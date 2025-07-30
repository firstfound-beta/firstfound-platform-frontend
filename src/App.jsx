import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import  SignIn  from './components/SignIn';
import Register from './components/Register';

function App() {
  return (
    <Router>
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;
