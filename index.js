import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MemoryRouter } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";

const { REACT_APP_PROJECT_ID: projectId } = process.env;

// below code will disable right click in entire app
document.addEventListener('contextmenu', event => event.preventDefault());

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter initialEntries={["/"]}>
      <ProSidebarProvider>
        <App />
      </ProSidebarProvider>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
