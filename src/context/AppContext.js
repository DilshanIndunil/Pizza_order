import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const AppContext = createContext();

const initialMenu = [
    {
        id: 1,
        name: 'Pepperoni Pizza',
        ingredients: { flour: 2, cheese: 1, pepperoni: 1 },
        price: 10,
    },
    {
        id: 2,
        name: 'Cheesy Onion Pizza',
        ingredients: { flour: 2, cheese: 2, onion: 1 },
        price: 12,
    },
];

const initialInventory = {
    flour: 100,
    cheese: 50,
    pepperoni: 30,
    onion: 40,
};

const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null); // { role: 'customer' or 'owner', username }
    const [orders, setOrders] = useState([]);
    const [menu, setMenu] = useState(initialMenu);
    const [inventory, setInventory] = useState(initialInventory);

    const login = (username, role) => {
        setUser({ username, role });
    };

    const logout = () => {
        setUser(null);
    };

    const placeOrder = (orderItems) => {
        // Check if ingredients are available
        const requiredIngredients = {};
        orderItems.forEach((item) => {
            const menuItem = menu.find((m) => m.id === item.id);
            if (menuItem) {
                Object.keys(menuItem.ingredients).forEach((ing) => {
                    requiredIngredients[ing] =
                        (requiredIngredients[ing] || 0) + menuItem.ingredients[ing] * item.quantity;
                });
            }
        });

        const canPlaceOrder = Object.keys(requiredIngredients).every(
            (ing) => inventory[ing] >= requiredIngredients[ing]
        );

        if (!canPlaceOrder) {
            return { success: false, message: 'Insufficient ingredients!' };
        }

        // Deduct ingredients
        const newInventory = { ...inventory };
        Object.keys(requiredIngredients).forEach((ing) => {
            newInventory[ing] -= requiredIngredients[ing];
        });
        setInventory(newInventory);

        // Create order
        const order = {
            id: uuidv4(),
            items: orderItems,
            status: 'Placed',
            timestamp: new Date().toISOString(),
        };
        setOrders([...orders, order]);
        return { success: true, orderId: order.id };
    };

    const updateOrderStatus = (orderId, newStatus) => {
        setOrders(
            orders.map((order) =>
                order.id === orderId ? { ...order, status: newStatus } : order
            )
        );
    };

    const addInventoryItem = (itemName, quantity) => {
        setInventory({ ...inventory, [itemName]: quantity });
    };

    const updateInventory = (itemName, quantity) => {
        setInventory({ ...inventory, [itemName]: quantity });
    };

    const removeInventoryItem = (itemName) => {
        const newInventory = { ...inventory };
        delete newInventory[itemName];
        setInventory(newInventory);
    };

    const addMenuItem = (name, ingredients, price) => {
        setMenu([...menu, { id: menu.length + 1, name, ingredients, price }]);
    };

    const removeMenuItem = (id) => {
        setMenu(menu.filter((item) => item.id !== id));
    };

    return (
        <AppContext.Provider
            value={{
                user,
                login,
                logout,
                menu,
                inventory,
                orders,
                placeOrder,
                updateOrderStatus,
                addInventoryItem,
                updateInventory,
                removeInventoryItem,
                addMenuItem,
                removeMenuItem,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;