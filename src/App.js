import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AppContextProvider from './context/AppContext';
import Login from './Pages/Login/Login';
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard';
import OwnerDashboard from './components/OwnerDashboard/OwnerDashboard';

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/customer" element={<CustomerDashboard />} />
          <Route path="/owner" element={<OwnerDashboard />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
};

export default App;