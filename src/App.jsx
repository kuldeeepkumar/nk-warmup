import "./App.css";

import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="home-heading">Welcome to Programming</h1>
      <div></div>
      <div className="card">
        <button onClick={() => navigate("exercise1")}>Exercise 1</button>
        <button onClick={() => navigate("exercise2")}>Exercise 2</button>
        <button onClick={() => navigate("exercise3")}>Exercise 3</button>
      </div>
    </>
  );
}

export default App;
