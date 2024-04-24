import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./components/UpdateCoffee/UpdateCoffee.jsx";
import AddCoffee from "./components/UpdateCoffee/AddCoffee/AddCoffee.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        loader: () => fetch("http://localhost:3000/coffee"),
    },
    {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
    },
    {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);
