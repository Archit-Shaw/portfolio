# 🚀 My Developer Portfolio

This is a personal portfolio website built with **React + Vite**, styled using **Tailwind CSS**, and deployed on **GitHub Pages**.

## 📁 Project Structure

```
.
├── public/
├── src/
│   ├── assets/        # Static images and icons
│   ├── components/    # Reusable React components (Navbar, Home, Projects, etc.)
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

Make sure you have **Node.js** and **npm** installed on your machine.

1. Clone the repository:
   ```bash
   git clone https://github.com/Archit-Shaw/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🚀 Deployment to GitHub Pages (Default GitHub Domain)

### 1. Install the GitHub Pages package:
```bash
npm install gh-pages --save-dev
```

### 2. Add the following to your `package.json`:

#### `"homepage"`:
```json
"homepage": "https://Archit-Shaw.github.io/your-repo-name"
```

#### `"scripts"`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### 3. Build and deploy:
```bash
npm run deploy
```

This will create a production build and push the contents of the `dist` folder to a branch named `gh-pages`. GitHub will serve it at:

```
https://Archit-Shaw.github.io/your-repo-name/
```

---

## 🐛 Common Issues

### `main.jsx` 404 on GitHub Pages

GitHub Pages hosts the app from root. Ensure that:

- You're using **HashRouter** instead of **BrowserRouter** if you aren't configuring custom rewrites.
- `vite.config.js` has the correct `base` path:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/your-repo-name/",
  plugins: [react()],
})
```

> Replace `your-repo-name` with the actual name of your GitHub repo.

---

## 📦 Technologies Used

- React
- Vite
- Tailwind CSS
- GitHub Pages
- Framer Motion
- React Icons

---

## 🙋‍♂️ Author

**Archit Shaw**  
GitHub: [@Archit-Shaw](https://github.com/Archit-Shaw)

---

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
