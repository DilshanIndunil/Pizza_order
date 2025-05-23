import React, { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import OrderForm from '../../components/OrderForm/OrderForm';
import OrderStatus from '../../components/OrderStatus/OrderStatus';
import './CustomerDashboard.scss'; // Import the new SCSS file for styling

const CustomerDashboard = () => {
    const { user, logout } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user || user.role !== 'customer') {
        return <Navigate to="/login" />;
    }

    return (
        <div className="customer-dashboard-container">
            <div className="dashboard-content">
                <div className="header">
                    <h1 className="welcome-message">Welcome, {user.username}! Ready to order? 🍕</h1>
                    <button
                        onClick={handleLogout}
                        className="logout-btn"
                    >
                        Logout
                    </button>
                </div>
                <OrderForm />
                <OrderStatus />
            </div>
        </div>
    );
};

export default CustomerDashboard;
