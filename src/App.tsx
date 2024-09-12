import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ThemeContextProvider from "./context/ThemeContext";

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                { path: "/", element: <h1> Home Page </h1> },
                { path: "/projects", element: <h1>Projects Page</h1> },
                { path: "/about-me", element: <h1>About Me Page</h1> },
            ],
        },
    ]);

    return (
        <ThemeContextProvider>
            <RouterProvider router={router} />
        </ThemeContextProvider>
    );
}
