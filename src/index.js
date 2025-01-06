import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./utils/About.jsx";
import BoardOfDirectors from "./utils/BoardOfDrictionSection.jsx";
import ProjectSection from "./utils/ProjectSection.jsx";
import ContactUs from "./utils/ContactUs.jsx";
import ProjectDetailPage from "./utils/ProjectDetailPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/project",
    element: <ProjectSection />,
  },
  {
    path: "/BoardOfDirectors",
    element: <BoardOfDirectors />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    path: "/project-details",
    element: <ProjectDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
