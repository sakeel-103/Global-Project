# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


##   **How to Run the Application
Prerequisites
Node.js (v16 or higher recommended)

1. Clone the repository:

  git clone - https://github.com/sakeel-103/Global-Project.git

2. cd global-prj 
    -- npm install 

3. npm run dev

### 📦 Dependencies
  ```bash
    React (v18+)

React Router DOM (for routing)

Axios (API requests)

Sass/Tailwind (styling)

```

#### ********    🛠 Key Approaches

1. Authentication Flow
Token Management: JWT tokens stored in localStorage/sessionStorage (handled in auth.js).

Protected Routes: Implemented via ProtectedRoute.jsx to restrict access to authenticated users.

Login/Logout: Forms managed with React state; API calls via axios (in api/auth.js).

2. API Integration
Centralized API Calls: API logic abstracted in api/index.js or regresApi.js for reusability.

Error Handling: Global error interceptors for consistent API responses.

3. UI/UX
Modular Components: Reusable components like Alert.jsx and Pagination.jsx.

Responsive Design: CSS-in-JS or Sass for styling.

4. State Management
Context API/Redux: Used for global state (e.g., auth status, user data).

Local State: React hooks (useState, useEffect) for component-level state.


###   ************************ END ****************************************

