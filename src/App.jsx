import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Dashboard from './components/Dashboard'; // Create this component
import PrivateRoute from './components/PrivateRoute';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('🔐 User is logged in');
    }
  }, []);

  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />

          {/* ✅ Protected route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
