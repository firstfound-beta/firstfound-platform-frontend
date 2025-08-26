import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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

import AdminLogin from "./components/Admin/AdminLogin";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminDashboard from "./components/Admin/Dashboard";
import UserManagement from "./components/Admin/pages/UserManagement";
import StartupApplication from "./components/Admin/pages/StartupApplication";
import { AdminProvider, useAdmin } from "./context/AdminContext";
import CampaignManagement from "./components/Admin/pages/CampaignManagement";
import ContentManagement from "./components/Admin/pages/ContentManagement";
import Transactions from "./components/Admin/pages/Transactions";
import Analytics from "./components/Admin/pages/Analytics";


const ProtectedRoute = ({ children }) => {
  const { isAdminAuthenticated } = useAdmin();
  const location = useLocation();

  if (!isAdminAuthenticated) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return children;
};

function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = []; // Add paths like "/signin" if you want to hide Navbar
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <div className="font-sans flex flex-col min-h-screen">
      {!isAdminRoute && <Navbar />}

      <div className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/launch" element={<StartupForm />} />
          <Route path="/startup" element={<StartupPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/forinvestor" element={<ForInvestor />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />

          {/* User Dashboard */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/UserManagement"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <UserManagement />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/ContentManagement"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <ContentManagement />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/Transactions"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Transactions />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/Analytics"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Analytics />
                </AdminLayout>
              </ProtectedRoute>
            }
          />


          <Route
            path="/admin/CampaignManagement"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <CampaignManagement />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/StartupApplication"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <StartupApplication/>
                </AdminLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
        
      </div>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AdminProvider>
        <Router>
          <AppContent />
        </Router>
      </AdminProvider>
    </AuthProvider>
  );
}

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; // Import Footer
// import Homepage from "./components/Homepage";
// import SignIn from "./components/SignIn";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";
// import StartupForm from "./components/StartupForm";
// import About from "./components/About";
// import ForInvestor from "./components/ForInvestor";
// import ProductDetailPage from "./components/ProductDetailPage";
// import StartupPage from "./components/StartupPage";
// import { AuthProvider } from "./context/AuthContext";

// function AppContent() {
//   const location = useLocation();
//   const hideNavbarRoutes = []; // Add paths like "/signin" if you want to hide Navbar
//   const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

//   return (
//     <div className="font-sans flex flex-col min-h-screen">
//       {shouldShowNavbar && <Navbar />}

//       <div className="flex-grow">
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/launch" element={<StartupForm />} />
//           <Route path="/startup" element={<StartupPage />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/forinvestor" element={<ForInvestor />} />
//           <Route path="/product/:id" element={<ProductDetailPage />} />
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//         </Routes>
//       </div>

//       <Footer /> {/* Footer always visible */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppContent />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
