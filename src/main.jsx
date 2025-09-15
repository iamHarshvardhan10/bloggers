import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./css/master.scss";
import { AppContextProvider } from "./context/AppContext";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);
