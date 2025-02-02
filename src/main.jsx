import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
import { RouterProvider } from "react-router-dom";
//-----------React-----Router-------
import router from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container m-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
