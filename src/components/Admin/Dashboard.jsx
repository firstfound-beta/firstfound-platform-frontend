import React, { useState, useEffect } from 'react';
import { 
  FiTrendingUp, 
  FiDollarSign, 
  FiCheckCircle, 
  FiClock, 
  FiUser, 
  FiShoppingBag,
  FiRefreshCw,
  FiAlertCircle,
  FiLayers,
  FiFileText,
  FiActivity,
  FiSettings
} from 'react-icons/fi';
import { motion } from 'framer-motion';

const StatCard = ({ label, value, icon, trend, trendColor, index }) => {
  const Icon = icon;
  return (
    <motion.div 
      className="flex-1 p-6 bg-white shadow-lg rounded-lg card-hover animate-scaleIn"
      style={{ animationDelay: `${index * 0.2}s` }}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</p>
          <p className="text-3xl font-bold mt-2 text-gray-800">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${trendColor || 'bg-blue-50'} text-blue-500`}>
          <Icon className="text-2xl" />
        </div>
      </div>
      {trend && (
        <div className="mt-4 flex items-center text-sm">
          <span className={`${trendColor || 'text-green-500'} flex items-center font-medium`}>
            {trend}
            <FiTrendingUp className="ml-1" />
          </span>
          <span className="text-gray-400 ml-2">vs last week</span>
        </div>
      )}
    </motion.div>
  );
};

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalRegistrations: 0,
    stallBookings: 0,
    sponsors: 0,
    confirmedPayments: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const API_ENDPOINTS = {
    registrations: "https://mahakisanmela.com/api/registers",
    stallBookings: "https://mahakisanmela.com/api/stallBooking/stall-bookings",
    sponsors: "https://mahakisanmela.com/api/sponsorship",
  };

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const [registrationsRes, stallBookingsRes, sponsorsRes] = await Promise.all([
        fetch(API_ENDPOINTS.registrations),
        fetch(API_ENDPOINTS.stallBookings),
        fetch(API_ENDPOINTS.sponsors)
      ]);

      if (!registrationsRes.ok) throw new Error('Failed to fetch registrations');
      if (!stallBookingsRes.ok) throw new Error('Failed to fetch stall bookings');
      if (!sponsorsRes.ok) throw new Error('Failed to fetch sponsors');

      const [registrations, stallBookings, sponsors] = await Promise.all([
        registrationsRes.json(),
        stallBookingsRes.json(),
        sponsorsRes.json()
      ]);

      const confirmedPayments = registrations.filter(reg => reg.status === 'Paid').length;

      setStats({
        totalRegistrations: registrations.length,
        stallBookings: stallBookings.length,
        sponsors: sponsors.length,
        confirmedPayments
      });
      
      setLastUpdated(new Date());
    } catch (err) {
      console.error('Dashboard data fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="p-6 bg-[#fefaf6] min-h-screen flex justify-center items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"
        />
        <p className="mt-4 text-gray-600">Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-[#fefaf6] min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto mt-10"
        >
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <FiAlertCircle className="text-red-500 text-2xl mr-3" />
              <div>
                <h3 className="text-lg font-medium text-red-800">Error loading dashboard</h3>
                <p className="text-red-600">{error}</p>
                <button 
                  onClick={fetchDashboardData}
                  className="mt-3 inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <FiRefreshCw className="mr-2" /> Try Again
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  const dashboardCards = [
    { label: 'User Management', value: stats.totalRegistrations, icon: FiUser, trend: '+12.5%', trendColor: 'text-green-500' },
    { label: 'Startup Application', value: stats.stallBookings, icon: FiShoppingBag, trend: '+5.2%', trendColor: 'text-blue-500' },
    { label: 'Campaign Management', value: stats.sponsors, icon: FiActivity, trend: '+2', trendColor: 'text-purple-500' },
    { label: 'Content Management', value: stats.confirmedPayments, icon: FiFileText, trend: '+8.7%', trendColor: 'text-green-500' },
    { label: 'Transactions', value: 120, icon: FiDollarSign, trend: '+6%', trendColor: 'text-yellow-500' },
    { label: 'Analytics', value: 85, icon: FiLayers, trend: '+3%', trendColor: 'text-blue-400' },
  ];

  return (
    <div className="p-6 bg-[#fefaf6] min-h-screen text-white">
      {/* Header */}
      <motion.div 
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Originn Dashboard</h1>
          {lastUpdated && (
            <p className="text-sm text-gray-500 mt-1">
              Last updated: {lastUpdated.toLocaleTimeString()} | {lastUpdated.toLocaleDateString()}
            </p>
          )}
        </div>
      </motion.div>

      {/* Dashboard Cards */}
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <StatCard key={index} {...card} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Dashboard;
