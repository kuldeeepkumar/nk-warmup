import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Exercise1 from "./exercises/exercise1";
import ReactDOM from "react-dom/client";

export default function AppRouter() {
  return (
    <Routes>
      <Route index path="App" element={<App />} />
      <Route path="exercise1" element={<Exercise1 />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);
