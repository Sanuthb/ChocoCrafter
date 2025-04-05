Here’s a clean and professional `README.md` for your **ChocoCrafter** customizable chocolate shop project built using React, Redux Toolkit, Ant Design, and Stripe:

---

```markdown
# 🍫 ChocoCrafter

CocoCraft is a fully customizable chocolate shop built with React, Redux Toolkit, Ant Design, and Stripe. It allows users to personalize their chocolates by selecting flavor infusions, fillings, and toppings, add multiple items to the cart, and complete their purchase with secure online payment.

## 🚀 Features

- 🛍️ Customize chocolates 
- ➕ Add multiple custom chocolates to cart
- 🔄 Redux Toolkit-based state management
- 💳 Stripe integration for secure payments
- 📦 MongoDB backend to store order details
- 🧩 Modular component architecture
- 🎨 Clean UI built with Ant Design

---

## 🧑‍🍳 Customization Options

Each chocolate order can be customized with:
- **Flavor Infusion** (e.g. Orange, Mint, Coffee)
- **Fillings** (e.g. Caramel, Nougat, Almond)
- **Toppings** (e.g. Sprinkles, Nuts, Coconut Flakes)

These selections are stored in a structured Redux `currentProduct` object and added to the `cart` for review and payment.

---

## 🛠️ Tech Stack

- **Frontend**: React, Redux Toolkit, Ant Design
- **State Management**: Redux Toolkit (Slices for cart, current product)
- **Backend**: Node.js, Express, MongoDB (for order storage)
- **Payment Gateway**: Stripe

---

## ⚙️ Getting Started

### Prerequisites

- Node.js & npm
- MongoDB
- Stripe API keys

### Installation

```bash
git clone https://github.com/Sanuthb/ChocoCrafter.git
cd ChocoCrafter
npm install
```

### Environment Variables

Create a `.env` file in the root:

```
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
MONGO_URI=your_mongodb_connection_string
```

### Run Frontend

```bash
cd frontend
npm install
npm run dev
```

### Run Backend

```bash
cd backend
npm install
npm run dev
```

---

## 🧑‍💻 Author

**Street2Site** – [street2site.com](https://street2site.com)

---

## 📄 License

MIT License. See `LICENSE` file for more info.

---

Enjoy crafting your dream chocolate with ChocoCrafter! 🍫✨
```

---

Let me know if you want a badge-filled version (e.g. Netlify deploy, license, tech stack), or want to convert it into a GitHub-style interactive README with screenshots and GIFs!