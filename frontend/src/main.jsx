import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { Navigate, Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Auth from "./pages/Auth/Auth.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route index={true} path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Route>
    )
)

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
