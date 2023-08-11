import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./TrackExpense.css";
import Accordian from "../Accordian";
import { totalExpense } from "../../redux/actions";
const TrackExpense = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    document.title = "Track Expense";
    props.data.map((item) => {
      setTotalAmount(
        (previousValue) => previousValue + parseInt(item.expenseAmount)
      );
    });
  }, []);

  return (
    <>
      <div id="header">
        <div className="totalValue">
          <div id="total">
            <strong>Total Spend: </strong>
            <span> Rs:{totalAmount}</span>
          </div>
          <h1>Your Expense List</h1>
        </div>
      </div>
      <div className="expenseContainer">
        {props.data.length !== 0 ? (
          props.data.map((item, i) => {
            return <Accordian data={item} key={i} />;
          })
        ) : (
          <>
            <p className="nothingPara">Oops! Nothing to show</p>
            <div className="nothingDiv">Please add the expense</div>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.expenseState.expense,
});
const mapDispatchToProps = (dispatch) => ({
  getTotal: () => dispatch(totalExpense()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrackExpense);
