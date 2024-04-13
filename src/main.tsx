import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import DashboardPage from "./pages/dashboard.page.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DashboardPage />
  </React.StrictMode>
);
