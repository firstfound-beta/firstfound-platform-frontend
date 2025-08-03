import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import StartupForm from './components/StartupForm';
import About from './components/About';
import ForInvestor from './components/ForInvestor';
import { AuthProvider } from './context/AuthContext';

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = []; // Add paths like "/signin" if needed
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="font-sans">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/launch" element={<StartupForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/forinvestor" element={<ForInvestor />} />
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
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
