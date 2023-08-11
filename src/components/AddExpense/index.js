import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import FastfoodIcon from "@mui/icons-material/Fastfood";

import "./addExpense.css";
import { addExpense } from "../../redux/actions";

const AddExpense = (props) => {
  // useState of the input and the select option.
  const [expenseNameInput, setExpenseNameInput] = useState("");
  const [expenseAmountInput, setExpenseAmountInput] = useState("");
  const [expenseOptionValue, setExpenseOptionValue] =
    useState("Select Category");

  useEffect(() => {
    document.title = "Add Expense";
  }, []);

  // Reset Function.
  const reset = () => {
    setExpenseAmountInput("");
    setExpenseNameInput("");
    setExpenseOptionValue("Select Category");
  };

  // temp
  const value = useSelector((state) => state.expenseState);

  const addingExpenseValue = (e) => {
    e.preventDefault();
    if (
      expenseAmountInput === "" ||
      expenseNameInput === "" ||
      expenseOptionValue === "Select Category"
    ) {
      alert("Please Enter the complete data");
      return;
    }

    // If the data is complete then adding it to the store.
    const data = {
      expenseName: expenseNameInput,
      expenseAmount: expenseAmountInput,
      expenseCategory: expenseOptionValue,
      date: new Date(),
    };
    props.addExpense(data);
    reset();
  };

  // fucntion for setting the amount value and validating the number.
  const amountHandle = (event) => {
    setExpenseAmountInput(event.target.value);
  };

  return (
    <div className="container">
      <h1>Add Your Expense</h1>

      <form>
        <input
          type="text"
          placeholder="Name of the expense"
          value={expenseNameInput}
          onChange={(e) => setExpenseNameInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter the amount"
          value={expenseAmountInput}
          onChange={(e) => amountHandle(e)}
        />
        <select onChange={(e) => setExpenseOptionValue(e.target.value)}>
          <option value="Select Category" selected>
            Select Category
          </option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Food">Food</option>
          <option value="Others">Others</option>
        </select>
        <button onClick={(event) => addingExpenseValue(event)}>Add</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addExpense: (data) => dispatch(addExpense(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
