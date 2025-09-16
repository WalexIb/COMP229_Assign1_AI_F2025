/* File: main.jsx
   Student: Adewale Ibrahim
   StudentID: 301515732
   Date: 2025-09-15
*/

/* Import necessary modules and components */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // import Router
import "./index.css";
import App from "./App.jsx";

/* Render the main application */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);




