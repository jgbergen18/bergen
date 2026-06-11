import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initEasterEggs } from "./lib/easterEggs";

initEasterEggs();
createRoot(document.getElementById("root")!).render(<App />);
