import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './OrderForm.scss'; // Import the SCSS file for styling

const OrderForm = () => {
    const { menu, placeOrder } = useContext(AppContext);
    const [orderItems, setOrderItems] = useState(
        menu.map((item) => ({ id: item.id, quantity: 0 }))
    );

    const handleQuantityChange = (id, quantity) => {
        setOrderItems(
            orderItems.map((item) =>
                item.id === id ? { ...item, quantity: parseInt(quantity) || 0 } : item
            )
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const itemsToOrder = orderItems.filter((item) => item.quantity > 0);
        if (itemsToOrder.length === 0) {
            alert('Please select at least one item');
            return;
        }

        const result = placeOrder(itemsToOrder);
        if (result.success) {
            alert(`Order placed successfully! Reference ID: ${result.orderId}`);
            setOrderItems(menu.map((item) => ({ id: item.id, quantity: 0 })));
        } else {
            alert(result.message);
        }
    };

    return (
        <div className="order-form-container">
            <h2 className="title">Place Your Order Here</h2>
            <form onSubmit={handleSubmit}>
                {menu.map((item) => (
                    <div key={item.id} className="menu-item">
                        <div className="menu-item-header">
                            <span>{item.name} (${item.price})</span>
                            <input
                                type="number"
                                min="0"
                                value={orderItems.find((oi) => oi.id === item.id).quantity}
                                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                className="quantity-input"
                                placeholder="Qty"
                            />
                        </div>
                        <p className="ingredient-list">
                            Ingredients: {Object.entries(item.ingredients)
                                .map(([ing, qty]) => `${ing}: ${qty}`)
                                .join(', ')}
                        </p>
                    </div>
                ))}
                <button
                    type="submit"
                    className="submit-btn"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
