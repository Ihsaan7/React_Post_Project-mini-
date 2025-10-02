**A modern React application demonstrating advanced routing patterns with React Router v7** 🚀

✨ Key Highlights:
•  🔗 Your live domain link: https://post-project-ochre.vercel.app/posts
•  ✅ Confirmed React Router v7 (version 7.9.3 from your package.json)
•  🎨 Plenty of emojis to make it visually appealing
•  🛠 Complete tech stack with versions
•  📱 Feature descriptions for all main functionality
# 📝 React Post Project



## 🎯 About The Project

This React Post Project is a comprehensive demonstration of modern client-side routing architecture using **React Router v7**. It showcases advanced routing patterns including nested routes, layout routes, data loading strategies, and state management through a beautiful, GitHub-inspired interface with dark/light theme support.

### 🚦 Advanced Routing Features

- **Nested Routes** - Complex route hierarchies with parent-child relationships
- **Layout Routes** - Shared layouts across multiple pages with persistent navigation
- **Data Loading** - Efficient data fetching with React Router's loader functions
- **Error Boundaries** - Graceful error handling with custom error pages
- **Route Protection** - Structured approach to route organization

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


**⭐ Star this repository if you found it helpful!**

Made with ❤️ and ⚛️ React

[🔝 Back to Top](#-react-post-project)

</div>
