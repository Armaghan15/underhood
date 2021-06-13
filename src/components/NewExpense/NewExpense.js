import React, { useState } from "react";

import ExpenseForm from "../NewExpense/ExpenseForm";
import "../NewExpense/NewExpense.css";

const NewExpense = (props) => {
  // State for the displayed content in the new expense Component
  let [isEditing, setIsEditing] = useState(false);

  // Method for submiting the form data
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // console.log(expenseData);

    props.onAddExpense(expenseData);
    
    setIsEditing(false);
  };

  // Method for changing isEditing to true hence showing the displaying the form
  const setIsEditingTrue = () => {
    setIsEditing(true);
  };

  // Method for form canceling
  const cancelForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={setIsEditingTrue} className="add-new-expense-button">
          Add New Expense
        </button>
      )}

      {isEditing && (
        <ExpenseForm
          onCancel={cancelForm}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
