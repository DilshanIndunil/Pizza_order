🍕 Pizza Shop Application – Overview
Pizza Shop is a beginner-friendly React app that simulates a pizza ordering system with two roles: Customer and Shop Owner. Customers can place orders and track them. Owners manage inventory, menu, and order statuses. Data is managed in-memory using React Context API. No backend is used.

✨ Features
🔸 Customer
Login as Customer.

Place Orders for available pizzas with quantities.

Check Order Status using a unique order ID.

Ingredient Check – Orders fail if ingredients are insufficient.

🔸 Shop Owner
Login as Shop Owner.

Manage Orders – Update order statuses.

Manage Inventory – Add, edit, remove ingredients.

Manage Menu – Add or remove pizza types and prices.

⚙️ Tech Stack
React (UI)

React Router (Navigation)

React Context API (State)

Tailwind CSS (CDN-based Styling)

UUID (Unique Order IDs)

📦 Setup Instructions
1. Clone or Create Project
bash
Copy
Edit
git clone <repository-url>
cd pizza-shop
# OR
npx create-react-app pizza-shop
cd pizza-shop
2. Install Dependencies
bash
Copy
Edit
npm install react-router-dom uuid
3. Tailwind CSS Setup
Add this in public/index.html inside <head>:

html
Copy
Edit
<script src="https://cdn.tailwindcss.com"></script>
4. Clear Default CSS
Ensure src/index.css is empty (Tailwind handles styling).

5. Run the App
bash
Copy
Edit
npm start
Open http://localhost:3000.

📁 Folder Structure
pgsql
Copy
Edit
src/
├── components/
│   ├── OrderForm.js
│   ├── OrderStatus.js
│   ├── InventoryManagement.js
│   ├── MenuManagement.js
│   └── OrderManagement.js
├── context/
│   └── AppContext.js
├── pages/
    ├── CustomerDashboard.js
    ├── OwnerDashboard.js
│   └── Login.js
├── App.js
├── index.js
└── index.css

🧭 Usage Guide
Customer
Login → Enter name, choose "Customer".

Place Order → Select pizzas and quantity.

Get Order ID → Shown after placing order.

Check Status → Enter order ID to see status.

Logout → Click Logout button.

Shop Owner
Login → Enter name, choose "Shop Owner".

Manage Orders → View and update statuses.

Manage Inventory → Add, update, delete ingredients.

Manage Menu → Add/remove pizzas.

Logout → Click Logout button.

⚠️ Limitations
Data resets on refresh (no backend).

No real authentication.

Basic form validation.

🌱 Future Enhancements
Add backend (Node.js, Firebase, etc.).

Implement real authentication.

Improve form validation and UX.

Add timestamps and loading indicators.

🛠️ Troubleshooting
App won't start? Run npm install. Check Node.js.

Blank screen? Verify Tailwind CDN and index.js.

Broken routes? Ensure react-router-dom is installed.

No styles? Check Tailwind <script> in index.html.