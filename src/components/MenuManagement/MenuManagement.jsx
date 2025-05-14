import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './MenuManagement.scss'; // Import the SCSS file for styling

const MenuManagement = () => {
    const { menu, inventory, addMenuItem, removeMenuItem } = useContext(AppContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [ingredients, setIngredients] = useState({});

    const handleIngredientChange = (ing, qty) => {
        setIngredients({ ...ingredients, [ing]: parseInt(qty) || 0 });
    };

    const handleAddMenuItem = (e) => {
        e.preventDefault();
        if (name && price && Object.keys(ingredients).length > 0) {
            addMenuItem(name, ingredients, parseFloat(price));
            setName('');
            setPrice('');
            setIngredients({});
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="menu-management-container">
            <h3 className="title">Manage Menu</h3>
            <form onSubmit={handleAddMenuItem} className="form-container">
                <div className="input-group">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-text"
                        placeholder="Pizza Name"
                    />
                </div>
                <div className="input-group">
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="input-number"
                        placeholder="Price"
                        step="0.01"
                    />
                </div>
                <div className="ingredients-section">
                    <h4 className="ingredients-title">Ingredients</h4>
                    {Object.keys(inventory).map((ing) => (
                        <div key={ing} className="ingredient-item">
                            <span className="ingredient-name">{ing}</span>
                            <input
                                type="number"
                                min="0"
                                value={ingredients[ing] || 0}
                                onChange={(e) => handleIngredientChange(ing, e.target.value)}
                                className="input-number"
                            />
                        </div>
                    ))}
                </div>
                <button
                    type="submit"
                    className="add-item-btn"
                >
                    Add Menu Item
                </button>
            </form>
            <div className="menu-list">
                <h4 className="menu-title">Current Menu</h4>
                <ul>
                    {menu.map((item) => (
                        <li key={item.id} className="menu-item">
                            <div className="menu-item-details">
                                <span>
                                    {item.name} (${item.price}) - Ingredients:{' '}
                                    {Object.entries(item.ingredients)
                                        .map(([ing, qty]) => `${ing}: ${qty}`)
                                        .join(', ')}
                                </span>
                                <button
                                    onClick={() => removeMenuItem(item.id)}
                                    className="remove-btn"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MenuManagement;
