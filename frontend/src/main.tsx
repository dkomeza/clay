import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <main className="dark text-foreground bg-background">
      <Router>
        <App />
      </Router>
    </main>
    {/* </Provider> */}
  </React.StrictMode>
);
