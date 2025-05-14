import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './InventoryManagement.scss'; // Import the SCSS file for styling

const InventoryManagement = () => {
    const { inventory, addInventoryItem, updateInventory, removeInventoryItem } =
        useContext(AppContext);
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        if (newItemName && newItemQuantity) {
            addInventoryItem(newItemName, parseInt(newItemQuantity));
            setNewItemName('');
            setNewItemQuantity('');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="inventory-management-container">
            <h3 className="title">Manage Inventory</h3>
            <form onSubmit={handleAddItem} className="add-item-form">
                <div className="input-group">
                    <input
                        type="text"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        className="input-text"
                        placeholder="New Ingredient Name"
                    />
                    <input
                        type="number"
                        value={newItemQuantity}
                        onChange={(e) => setNewItemQuantity(e.target.value)}
                        className="input-number"
                        placeholder="Quantity"
                    />
                    <button
                        type="submit"
                        className="add-item-btn"
                    >
                        Add Item
                    </button>
                </div>
            </form>
            <div>
                <h4 className="inventory-title">Current Inventory</h4>
                <ul>
                    {Object.entries(inventory).map(([item, quantity]) => (
                        <li key={item} className="inventory-item">
                            <span className="item-name">
                                {item}: {quantity}
                            </span>
                            <input
                                type="number"
                                defaultValue={quantity}
                                onBlur={(e) => updateInventory(item, parseInt(e.target.value))}
                                className="input-number"
                            />
                            <button
                                onClick={() => removeInventoryItem(item)}
                                className="remove-btn"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default InventoryManagement;
