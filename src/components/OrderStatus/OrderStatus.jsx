import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './OrderStatus.scss'; // Import the SCSS file for styling

const OrderStatus = () => {
    const { orders, menu } = useContext(AppContext);
    const [orderId, setOrderId] = useState('');
    const [order, setOrder] = useState(null);

    const checkStatus = () => {
        const foundOrder = orders.find((o) => o.id === orderId);
        if (foundOrder) {
            setOrder(foundOrder);
        } else {
            alert('Order not found');
            setOrder(null);
        }
    };

    return (
        <div className="order-status-container">
            <h3 className="title">Check Order Status</h3>
            <div className="input-container">
                <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    className="order-input"
                    placeholder="Enter Order Reference ID"
                />
                <button
                    onClick={checkStatus}
                    className="check-btn"
                >
                    Check
                </button>
            </div>
            {order && (
                <div className="order-details">
                    <p>
                        <strong>Order ID:</strong> {order.id}
                    </p>
                    <p>
                        <strong>Status:</strong> {order.status}
                    </p>
                    <p>
                        <strong>Items:</strong>{' '}
                        {order.items
                            .map((item) => {
                                const menuItem = menu.find((m) => m.id === item.id);
                                return menuItem ? `${menuItem.name} (x${item.quantity})` : 'Unknown Item';
                            })
                            .join(', ')}
                    </p>
                </div>
            )}
        </div>
    );
};

export default OrderStatus;
