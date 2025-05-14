import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './OrderManagement.scss'; // Import the SCSS file for styling

const OrderManagement = () => {
    const { orders, menu, updateOrderStatus } = useContext(AppContext);
    const statuses = ['Placed', 'Preparing', 'Dispatched', 'Delivered'];

    return (
        <div className="order-management-container">
            <h3 className="title">Manage Orders</h3>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order.id} className="order-item">
                            <p>
                                <strong>Order ID:</strong> {order.id}
                            </p>
                            <p>
                                <strong>Items:</strong>{' '}
                                {order.items
                                    .map((item) => {
                                        const menuItem = menu.find((m) => m.id === item.id);
                                        return menuItem ? `${menuItem.name} (x${item.quantity})` : '';
                                    })
                                    .join(', ')}
                            </p>
                            <p>
                                <strong>Status:</strong> {order.status}
                            </p>
                            <div className="status-buttons">
                                {statuses.map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => updateOrderStatus(order.id, status)}
                                        className={`status-btn ${order.status === status ? 'status-btn-disabled' : 'status-btn-active'}`}
                                        disabled={order.status === status}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrderManagement;
