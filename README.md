# 📚 BookNest - Frontend

BookNest is a modern book listing web application built with React and Tailwind CSS. Users can browse books, view details, and read reviews. 

---

### 🔗 Live Website

[Click here to visit BookNest](https://booknest-frontend-nine.vercel.app)

---

## 🚀 Features

- View available books by category
- Detailed book view with About, Course, and Review tabs
- Custom user login/signup modal
- Responsive design with Tailwind CSS
- Connected to a live backend on Render

---

## 🔐 Authentication

- **Custom authentication system**
- On login, user credentials are verified via backend
- On success, user details are stored in `localStorage`
- `AuthContext` (via React Context API) provides access to user across the app

---

## 🛠️ Tech Stack

- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🔗 Axios (for API calls)
- 🌍 Render (for backend API)
- **React Hot Toast**

---

## 🧾 Installation & Setup

```bash
git clone https://github.com/your-username/booknest-frontend.git
cd booknest-frontend
npm install
npm run dev
