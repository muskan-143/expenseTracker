import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import SchoolIcon from "@mui/icons-material/School";
import QuizIcon from "@mui/icons-material/Quiz";

import "./Accordian.css";
import { connect } from "react-redux";
import { deleteExpense } from "../../redux/actions";

const Accordian = ({ data, deleteData }) => {
  // Geting the date and the time when the expense was made.
  const date = data.date.split("T")[0];
  const time = data.date.split("T")[1].split(".")[0];

  const [show, setShow] = useState(false);

  const showLogo = () => {
    if (data.expenseCategory === "Food") {
      return "Food";
    } else if (data.expenseCategory === "Health") {
      return "Health";
    } else if (data.expenseCategory === "Education") {
      return "Education";
    } else if (data.expenseCategory === "other") {
      return "Other";
    }
  };

  // function to delete the data.
  const deleteDataHandle = () => {
    console.log(data);
    deleteData(data);
  };

  return (
    <>
      <div className="expenseTitle" onClick={() => setShow(!show)}>
        <h4>
          {showLogo() === "Food" ? (
            <span>
              <FastfoodIcon />
            </span>
          ) : showLogo() === "Education" ? (
            <span>
              <SchoolIcon />
            </span>
          ) : showLogo() === "Health" ? (
            <span>
              <HealthAndSafetyIcon />
            </span>
          ) : (
            <span>
              <QuizIcon />
            </span>
          )}

          {data.expenseCategory}
        </h4>
        <span>{show ? "➖" : "➕"}</span>
      </div>
      {show && (
        <div className="expenseContent">
          <div>
            <p>Title: {data.expenseName}</p>
            <p>Amount Spend: {data.expenseAmount}</p>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
          </div>
          <div id="delete" onClick={deleteDataHandle}>
            <DeleteIcon />
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  deleteData: (data) => dispatch(deleteExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Accordian);
