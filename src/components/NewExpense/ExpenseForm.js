import React, { useState } from "react";
import "../NewExpense/ExpenseForm.css";

const ExpenseForm = (props) => {
  // Managing the state of the different inputs with the useState hook
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Method for handling the change on the title input field
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // Method for handling the change on the price input field
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  // Method for handling the change on the date input field
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // This method will be executed when the form is submited
  const submitForm = (event) => {
    // For  preventing the default browser behaviour hence, preventing the browser to make a request to the server
    event.preventDefault();

    // Collect all the states of our form and combine them in a single object
    const expenseData = {
      title: enteredTitle,
      price: enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // Clearing out all the input fields
    setEnteredTitle("");
    setEnteredPrice("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitForm}>
      <h3>Add new Expense</h3>
      <div className="new_expense__controls">
        <div className="new_expense__control">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={enteredTitle}
            className="title"
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new_expense__control">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            value={enteredPrice}
            className="price"
            onChange={priceChangeHandler}
          />
        </div>

        <div className="new_expense__control">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={enteredDate}
            className="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new_expense__actions">
        <button onClick={props.onCancel} className="cancel-button">
          Cancel
        </button>
        <button className="submit-button" type="submit">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
