import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import { createRoot } from "react-dom/client";
import "@mantine/notifications/styles.css";
import { UserProvider } from "./components/UserContext/User.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserProvider>
);
