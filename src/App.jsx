import "./App.css";

import { useNavigate } from "react-router-dom"; // Ensure you import from "react-router-dom"

function App() {
  const navigate = useNavigate(); // Rename 'navigation' to 'navigate' for consistency

  return (
    <>
      <h1 className="home-heading">Welcome to Programming</h1>
      <div></div>
      <div className="card">
        <button onClick={() => navigate("exercise1")}>Exercise 1</button>
      </div>
    </>
  );
}

export default App;
