Pizza Shop Application
Overview
The Pizza Shop is a React-based web application that simulates a pizza ordering system. It supports two user roles: Customer and Shop Owner. Customers can place orders, check order status, and view the menu, while Shop Owners can manage inventory, menu items, and order statuses. The application uses React Context API for state management and Tailwind CSS (via CDN) for styling. No backend is implemented; all data is managed in-memory using React state.
This project was built with beginners in mind, featuring a clean, responsive UI and straightforward code structure.
Features
Customer Features

Login: Log in with a username and select the "Customer" role.
Place Orders: Order one or more pizzas (e.g., Pepperoni Pizza, Cheesy Onion Pizza) with a quantity.
Check Order Status: View the status (Placed, Preparing, Dispatched, Delivered) of an order using its unique reference ID.
Ingredient Validation: Orders are rejected if ingredients are insufficient.

Shop Owner Features

Login: Log in with a username and select the "Shop Owner" role.
Manage Orders: View all orders and update their statuses.
Manage Inventory: Add, update, or remove ingredients (e.g., flour, cheese).
Manage Menu: Add or remove pizza types, including their ingredients and prices.

Technologies Used

React: Frontend library for building the UI.
React Router: For navigation between pages.
React Context API: For global state management.
Tailwind CSS: For styling (loaded via CDN).
UUID: For generating unique order IDs.
JavaScript: Core programming language.

Prerequisites

Node.js: Version 14 or higher.
npm: Comes with Node.js.
A modern web browser (e.g., Chrome, Firefox).

Setup Instructions

Clone the Repository (or create the project manually):
git clone <repository-url>
cd pizza-shop

If you don't have a repository, create a new React app:
npx create-react-app pizza-shop
cd pizza-shop


Install Dependencies:Install the required npm packages:
npm install react-router-dom uuid


Set Up Tailwind CSS:Ensure the public/index.html file includes the Tailwind CSS CDN:
<script src="https://cdn.tailwindcss.com"></script>

The complete public/index.html should look like:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Pizza Shop</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>


Create Project Structure:Ensure the src directory contains:
src/
├── components/
│   ├── Login.js
│   ├── CustomerDashboard.js
│   ├── OwnerDashboard.js
│   ├── OrderForm.js
│   ├── OrderStatus.js
│   ├── InventoryManagement.js
│   ├── MenuManagement.js
│   └── OrderManagement.js
├── context/
│   └── AppContext.js
├── App.js
├── index.js
└── index.css

Copy the code for each file from the provided implementation (see project documentation or source files).

Clear index.css:Ensure src/index.css is empty, as styling is handled by Tailwind CSS.

Run the Application:Start the development server:
npm start

The app will open at http://localhost:3000 in your browser.


Usage Guide

Login:

Navigate to http://localhost:3000/login.
Enter a username (e.g., "John").
Select a role: "Customer" or "Shop Owner".
Click "Login".


Customer Dashboard:

Place an Order:
Select quantities for pizzas (e.g., Pepperoni Pizza, Cheesy Onion Pizza).
Click "Place Order".
Note the unique order ID displayed in the alert.


Check Order Status:
Enter the order ID in the "Check Order Status" section.
Click "Check" to view the order’s status and items.


Logout: Click the "Logout" button to return to the login page.


Shop Owner Dashboard:

Manage Orders:
View all orders with their items and current status.
Update the status by clicking buttons (Placed, Preparing, Dispatched, Delivered).


Manage Inventory:
Add new ingredients with a name and quantity.
Update quantities of existing ingredients.
Remove ingredients.


Manage Menu:
Add new pizza types with a name, price, and ingredients.
Remove existing pizza types.


Logout: Click the "Logout" button to return to the login page.


Testing Edge Cases:

Try placing an order when ingredients are low (e.g., after multiple orders) to see the "Insufficient ingredients" error.
Add a new ingredient and create a pizza that uses it.
Remove a pizza type and verify it’s no longer available for ordering.



Project Structure

src/App.js: Main app component with routing setup.
src/context/AppContext.js: Context API for global state management (user, orders, menu, inventory).
src/components/:
Login.js: Login form for both user roles.
CustomerDashboard.js: Customer interface with order placement and status checking.
OwnerDashboard.js: Shop Owner interface with inventory, menu, and order management.
OrderForm.js: Form for customers to place orders.
OrderStatus.js: Interface for customers to check order status.
InventoryManagement.js: Interface for owners to manage ingredients.
MenuManagement.js: Interface for owners to manage pizza types.
OrderManagement.js: Interface for owners to view and update order statuses.


src/index.js: Entry point for the React app.
src/index.css: Empty, as styling is handled by Tailwind CSS.
public/index.html: HTML template with Tailwind CSS CDN.

Notes for Beginners

React Components: Each .js file in src/components/ is a reusable UI piece. They use useState for local state and useContext for global state.
Routing: react-router-dom handles navigation. Routes are defined in App.js.
Tailwind CSS: Styling is done with classes like bg-white, p-6, text-xl. Refer to the Tailwind CSS documentation for more classes.
State Management: The Context API in AppContext.js acts like a global store, holding data and functions used across components.
Debugging: Use the browser’s DevTools (F12) to check for errors. Ensure all files are saved and dependencies are installed.

Limitations

No Backend: Data is stored in-memory and resets on page refresh. For persistence, integrate a backend (e.g., Node.js, Firebase).
Simplified Authentication: Login uses only a username and role. In production, add proper authentication (e.g., JWT).
Basic Validation: Form inputs could be enhanced with stricter validation (e.g., preventing negative quantities).

Future Enhancements

Add a backend for data persistence.
Implement user authentication with passwords and sessions.
Add form validation and error messages.
Display order timestamps in a human-readable format.
Add a loading spinner for actions like placing orders.

Troubleshooting

App Doesn’t Start: Run npm install and ensure Node.js is installed.
Blank Page: Check public/index.html for the Tailwind CDN and verify src/index.js is correct.
Routing Issues: Ensure react-router-dom is installed and routes in App.js are correct.
Styling Issues: Verify the Tailwind CDN is in public/index.html.

For further assistance, consult the React documentation or Tailwind CSS documentation.
