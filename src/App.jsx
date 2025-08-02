import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import StartupForm from './components/StartupForm';

// Component to conditionally show navbar
function AppContent() {
  const location = useLocation();
  
  // Define routes where navbar should be hidden (if any)
  const hideNavbarRoutes = []; // Add routes here if you want to hide navbar on specific pages
  
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="font-sans">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/launch" element={<StartupForm />} />
        
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
      {/* <Route path="/launch" element={<StartupForm />} /> */}
    </div>
  );
}

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('🔐 User is logged in');
    }
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;