import React from "react";

import ExpenseForm from "../NewExpense/ExpenseForm";
import "../NewExpense/NewExpense.css";

const NewExpense = (props) => {
  // Method for adding a ID to the data got from the user through the form
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);

    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
