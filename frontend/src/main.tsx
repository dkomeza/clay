import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="dark text-foreground bg-background">
      <Router>
        <App />
      </Router>
    </main>
  </React.StrictMode>
);
