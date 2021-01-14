import React from "react";
import { connect } from "react-redux";

const ExpenseList = () => (
  <div>
    <h1>Expense</h1>
    {props.expenses.length}
  </div>
);

export default connect((state) => {
  return {
    expenses: state.expenses,
  };
})(ExpenseList);
