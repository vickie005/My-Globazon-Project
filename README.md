🛒 Globazon
Globazon is a simple e-commerce web app that lets users browse products, add them to the cart, choose delivery options, view an order summary, and simulate placing an order — just like Amazon, but global & simple!

📁 Project Structure

globazon/
│
├── data/                  # Static data for products, cart, and delivery options
│   ├── cart.js
│   ├── products.js
│   ├── deliveryOptions.js
│   ├── orders.js
│
├── scripts/               # App logic split by page
│   ├── checkout/          # Logic for the checkout page
│       ├── orderSummary.js
│       └── paymentSummary.js
│   ├── utils/             # Utility functions
│       └── money.js
│   └── checkout.js        # Entry point for checkout logic
│
├── styles/                # CSS styles
│   ├── shared/
│   └── pages/
│
├── images/                # Product and icon images
│
├── orders.html            # Displays user order history
├── checkout.html          # Checkout page
├── tracking.html          # Package tracking simulation
🚀 Features
🛍️ Checkout Page
Displays all items in the cart.

Shows product image, price, quantity, and delivery options.

Allows quantity update and item removal.

Users can select from multiple delivery speeds.

💳 Payment Summary
Calculates total price, shipping, tax (10%), and final total.

A "Place Order" button sends cart details to a mock API and redirects to the orders page.

📦 Orders Page
Displays recent orders with delivery dates and options to:

Track package

Buy item again

🧪 Technologies Used
HTML & CSS

Vanilla JavaScript

Day.js for date formatting

API for order simulation

📌 How to Use
Clone or download this repository.

Open checkout.html in a browser to start shopping.

Add items to your cart.

Select delivery options and place the order.

View order history on orders.html.

