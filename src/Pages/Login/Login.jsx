import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './Login.scss'; // Import your CSS file for styling

const Login = () => {
    const { login } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('customer');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username.trim()) {
            login(username, role);
            navigate(role === 'customer' ? '/customer' : '/owner');
        } else {
            alert('Please enter a username');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">Login to Pizza Shop</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label className="input-label">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-field"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="input-group">
                        <label className="input-label">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="input-field"
                        >
                            <option value="customer">Customer</option>
                            <option value="owner">Shop Owner</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="login-btn"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
