import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log("Count:", count);

    console.log("After calculation:", count + 1);
  };

  const [isOnline, setIsOnline] = useState(true);
  const handleActivity = () => {
    setIsOnline(!isOnline);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const [score, setScore] = useState(0);
  const handleAddOne = () => {
    setScore(score + 1);
  };
  const handleAddFive = () => {
    setScore(score + 5);
  };
  const handleReset = () => {
    setScore(0);
  };

  // Mini Project: Simple Product Quantity Controller

  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    setQuantity((quantity) => Math.max(0, quantity - 1));
  };

  const handleIncrease = () => {
    setQuantity((quantity) => quantity + 1);
  };

  const handleReset2 = () => {
    setQuantity(0);
  };

  return (
    <div>
      <div>
        <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
        <h2>{isLoggedIn ? "Welcome back!" : "Please login"}</h2>
      </div>

      <div>
        <h1>Status: {isOnline ? "Online" : "Offline"}</h1>
        <button onClick={handleActivity}>Change Activity</button>
      </div>

      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>

      <div style={{ margin: "10px" }}>
        <h1>{score}</h1>
        <button style={{ margin: "10px" }} onClick={handleAddOne}>
          <h2>+1</h2>
        </button>
        <button style={{ margin: "10px" }} onClick={handleAddFive}>
          <h2>+5</h2>
        </button>
        <button style={{ margin: "10px" }} onClick={handleReset}>
          <h2>Reset</h2>
        </button>

        <h3>{score >= 10 ? "Excellent!" : "Keep going!"}</h3>
      </div>

      <div>
        <h2>Product: React Book</h2>
        <h2>Quantity: {quantity}</h2>
        <button style={{ margin: "10px" }} onClick={handleDecrease}>
          Remove
        </button>
        <button style={{ margin: "10px" }} onClick={handleIncrease}>
          Add
        </button>
        <button style={{ margin: "10px" }} onClick={handleReset2}>
          Reset
        </button>
        <h2>Status: {quantity >= 1 ? "Available" : "Out of Stock"}</h2>
      </div>
    </div>
  );
}
export default Counter;
