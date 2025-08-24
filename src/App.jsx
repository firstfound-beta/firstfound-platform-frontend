import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import Homepage from "./components/Homepage";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import StartupForm from "./components/StartupForm";
import About from "./components/About";
import ForInvestor from "./components/ForInvestor";
import ProductDetailPage from "./components/ProductDetailPage";
import StartupPage from "./components/StartupPage";
import { AuthProvider } from "./context/AuthContext";

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = []; // Add paths like "/signin" if you want to hide Navbar
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="font-sans flex flex-col min-h-screen">
      {shouldShowNavbar && <Navbar />}

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/launch" element={<StartupForm />} />
          <Route path="/startup" element={<StartupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/forinvestor" element={<ForInvestor />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
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

      <Footer /> {/* Footer always visible */}
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
