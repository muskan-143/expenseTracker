import React from "react";
import "./Home.css";
import { useNavigate } from "react-router";
const Home = () => {
  const navigate = useNavigate();

  const trackExpensePage = () => {
    navigate("/trackExpense");
  };
  return (
    <>
      <div id="homeContainer">
        <div className="content">
          <h1>Track your expense</h1>
          <p>Let's understand the how much you spend for future saving</p>
          <p>Track it, save it and repeat</p>
          <button onClick={trackExpensePage}>Track Expense</button>
        </div>
        <div id="image">
          <img src="/images/homePage1.jpg" alt="imageOfHome" id="img" />
        </div>
      </div>
    </>
  );
};

export default Home;
