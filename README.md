# 📝 React Post Project

<div align="center">
  
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

**A modern React application demonstrating advanced routing patterns with React Router v7** 🚀

[🌐 Live Demo](https://post-project-ochre.vercel.app/posts) | [📁 Repository](https://github.com/Ihsaan7/React_Post_Project-mini-)

</div>

---

## 🎯 About The Project

This React Post Project is a comprehensive demonstration of modern client-side routing architecture using **React Router v7**. It showcases advanced routing patterns including nested routes, layout routes, data loading strategies, and state management through a beautiful, GitHub-inspired interface with dark/light theme support.

### 🌟 Why This Project Matters

- **🏗️ Modern Architecture**: Demonstrates best practices for React Router v7 implementation
- **� Educational Value**: Perfect for learning advanced routing concepts and patterns
- **🎨 Beautiful UI**: GitHub-inspired design with smooth animations and transitions
- **� Real-world Patterns**: Implements common patterns found in production applications
- **� Responsive Design**: Works seamlessly across all device sizes

---

## ✨ Features

### 🚦 Advanced Routing Features
- **Nested Routes** - Complex route hierarchies with parent-child relationships
- **Layout Routes** - Shared layouts across multiple pages with persistent navigation
- **Data Loading** - Efficient data fetching with React Router's loader functions
- **Error Boundaries** - Graceful error handling with custom error pages
- **Route Protection** - Structured approach to route organization

### 🎨 UI/UX Features

- **🌙 Dark/Light Theme** - Toggle between beautiful dark and light modes
- **🔍 Search & Filter** - Real-time search functionality across posts
- **📱 Responsive Design** - Optimized for mobile, tablet, and desktop
- **⚡ Smooth Animations** - Elegant transitions and hover effects
- **🎯 Modern Cards** - Beautiful card-based layouts with gradients
### �️ CRUD Operations

- **📝 Create Posts** - Add new posts with rich form validation
- **� Read Posts** - Browse and view detailed post information
- **✏️ Update Posts** - Edit existing posts with pre-populated forms
- **🗑️ Delete Posts** - Remove posts with confirmation dialogs

### 📊 Additional Features

- **👥 User Management** - User profiles with detailed information
- **📋 Todo Lists** - Interactive todo management with completion states
- **💬 Comments System** - View and manage post comments
- **🔗 Deep Linking** - Direct URLs to specific posts and pages

---

## 🧰 Tech Stack
### Core Technologies

- **⚛️ React 19.1.1** - Modern React with latest features
- **🚦 React Router v7.9.3** - Advanced client-side routing
- **🎨 Tailwind CSS 4.1.13** - Utility-first CSS framework
- **⚡ Vite 7.1.7** - Lightning-fast build tool

### Additional Libraries

- **🌐 Axios 1.12.2** - HTTP client for API requests
- **� React Hooks** - Modern state management patterns
- **📱 CSS Variables** - Dynamic theming system
- **🔧 ESLint** - Code quality and consistency


### Deployment & Tools

- **🚀 Vercel** - Seamless deployment and hosting
- **📦 npm** - Package management
- **🔄 Git** - Version control
- **🌐 JSONPlaceholder** - Mock API for demo data

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher) 📦
- **npm** or **yarn** 🔧
- **Git** 🔄

### 🖥️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/Ihsaan7/React_Post_Project-mini-.git
cd React_Post_Project-mini-
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
# Create .env.local file
echo "VITE_API_URL=https://jsonplaceholder.typicode.com" > .env.local
```

4. **Start the development server**

```bash
npm run dev
```

5. **Open your browser**
   Navigate to `http://localhost:5173` 🌐

### 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

---

## 🧭 Usage

### Navigation Structure

- **🏠 Home** (`/`) - Redirects to Posts page
- **� Posts** (`/posts`) - Main posts listing with search
  - **📖 Post Detail** (`/posts/:id`) - Individual post view
  - **✏️ Edit Post** (`/posts/:id/edit`) - Edit existing post
  - **➕ New Post** (`/posts/new`) - Create new post
- **👥 Users** (`/users`) - User directory
  - **👤 User Profile** (`/users/:id`) - Individual user details
- **📋 Todos** (`/todos`) - Todo list management

### Key Interactions

- **🔍 Search Posts** - Use the search bar to filter posts by title or content
- **🌙 Toggle Theme** - Click the theme toggle button in the header
- **📝 Create Content** - Use the "Create New Post" button to add posts
- **✏️ Edit Content** - Click "Edit" on any post to modify it
- **🔗 Deep Links** - Share direct links to specific posts or pages

---

## � Project Structure

```
src/
├── � main.jsx                 # Application entry point
├── 🚦 routes.jsx              # Route configuration and setup
├── 🎨 theme.css               # Theme variables and styling
├── 📄 index.css               # Global styles
├── 📁 layouts/
│   └── 🏠 RootLayout.jsx      # Main layout with navigation
├── 📁 pages/
│   ├── 📝 PostList.jsx        # Posts listing page
│   ├── � Post.jsx            # Individual post page
│   ├── ✏️ EditPost.jsx        # Edit post page
│   ├── ➕ NewPost.jsx         # Create post page
│   ├── 👥 UserList.jsx        # Users listing page
│   ├── 👤 User.jsx            # Individual user page
│   └── 📋 TodoList.jsx        # Todos page
├── 📁 components/
│   ├── 🃏 PostCard.jsx        # Post card component
│   ├── 👤 UserCard.jsx        # User card component
│   └── ✅ TodoCard.jsx        # Todo card component
└── 📁 api/
    ├── ⚙️ base.js             # Axios configuration
    ├── 📝 posts.js            # Posts API calls
    ├── 👥 users.js            # Users API calls
    └── 📋 todos.js            # Todos API calls
```

### � Routing Architecture

This project demonstrates several advanced routing patterns:

- **🏗️ Layout Routes** - `RootLayout` provides consistent navigation and theming
- **🔗 Nested Routes** - Posts have child routes for viewing and editing
- **📊 Data Loading** - Each route defines its own data loading strategy
- **🛡️ Error Handling** - Custom error boundaries for graceful failure handling
- **🔍 Search Integration** - URL-based search with React Router state

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Found a Bug?

1. Check existing [issues](https://github.com/Ihsaan7/React_Post_Project-mini-/issues)
2. Create a new issue with details
3. Include steps to reproduce

### ✨ Want to Add a Feature?

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📝 Code Style

- Follow existing code patterns
- Use meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly

<<<<<<< HEAD
=======
---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 React Post Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **React Router Team** - For the powerful routing solution
- **Tailwind CSS** - For the utility-first CSS framework
- **JSONPlaceholder** - For providing mock API data
- **Vercel** - For seamless deployment hosting

---

<div align="center">
>>>>>>> efb9351 (\Fix post creation and editing: handle JSONPlaceholder limitations with proper redirects and user feedback")

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and ⚛️ React

[🔝 Back to Top](#-react-post-project)

</div>
