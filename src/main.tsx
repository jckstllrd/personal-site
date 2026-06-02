import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.tsx";
import "./styles/global.css";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import About from "./pages/About.tsx";
import Articles from "./pages/Articles.tsx";
import Contact from "./pages/Contact.tsx";
import ArticleDetail from "./pages/ArticleDetails.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "articles",
        element: <Articles />,
      },
      {
        path: "articles/:id",
        element: <ArticleDetail />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
