# 🍕 Pizza Shop Application

**Pizza Shop** is a beginner-friendly React app that simulates a pizza ordering system with two roles: **Customer** and **Shop Owner**. Customers can place and track orders. Owners manage inventory, the menu, and order statuses. All data is stored in-memory using React Context API — no backend is required.

---

## ✨ Features

### 🔸 Customer
- Login as Customer
- Place orders with selected pizzas and quantities
- Track order status using a unique order ID
- Automatic ingredient validation (orders fail if ingredients are insufficient)

### 🔸 Shop Owner
- Login as Shop Owner
- View and update all order statuses
- Add, update, and remove ingredients from inventory
- Manage menu items and their required ingredients

---

## ⚙️ Tech Stack

- **React** – UI development
- **React Router** – Page navigation
- **React Context API** – Global state management
- **Tailwind CSS (via CDN)** – Styling
- **UUID** – Unique order IDs

---

## 📦 Setup Instructions

### 1. Clone or Create the Project

```bash
git clone <repository-url>
cd pizza-shop
# OR
npx create-react-app pizza-shop
cd pizza-shop
```

2. Install Dependencies

```bash
npm install react-router-dom uuid
```

3. Tailwind CSS Setup
Add this in public/index.html inside <head>:

```bash
<script src="https://cdn.tailwindcss.com"></script>
```

4. Clear Default CSS
Ensure src/index.css is empty (Tailwind handles styling).

5. Run the App
```bash
Copy
Edit
npm start
```

Open http://localhost:3000.

📁 Folder Structure


```bash
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
```

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
