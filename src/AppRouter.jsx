import { Route, Routes } from "react-router-dom";

import App from "./App";
import Exercise1 from "./exercises/Exercise1";
import Exercise2 from "./exercises/Exercise2";
import Exercise3 from "./exercises/Exercise3";
import ReactDOM from "react-dom/client";

export default function AppRouter() {
  return (
    <Routes>
      <Route index path="/" element={<App />} />
      <Route path="exercise1" element={<Exercise1 />} />
      <Route path="exercise2" element={<Exercise2 />} />
      <Route path="exercise3" element={<Exercise3 />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRouter />);
