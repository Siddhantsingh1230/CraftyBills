import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// For Routing
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./Contexts/User/UserContext.tsx";


// Following "Central State Architecture" using React Context API
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
