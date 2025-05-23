import React, { useContext } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import InventoryManagement from '../../components/InventoryManagement/InventoryManagement';
import MenuManagement from '../../components/MenuManagement/MenuManagement';
import OrderManagement from '../../components/OrderManagement/OrderManagement';
import './OwnerDashboard.scss';

const OwnerDashboard = () => {
    const { user, logout } = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    if (!user || user.role !== 'owner') {
        return <Navigate to="/login" />;
    }

    return (
        <div className="owner-dashboard-container">
            <div className="owner-dashboard-content">
                <div className="owner-dashboard-header">
                    <h2 className="owner-dashboard-title">Shop Owner Dashboard !</h2>
                    <button
                        onClick={handleLogout}
                        className="owner-dashboard-logout-btn"
                    >
                        Logout
                    </button>
                </div>
                <InventoryManagement />
                <MenuManagement />
                <OrderManagement />
            </div>
        </div>
    );
};

export default OwnerDashboard;
