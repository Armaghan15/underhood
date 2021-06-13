import React from "react";

// Importing External Components
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../UI/Card/Card";

// Import Css Files
import "./ExpensesList.css";

const ExpensesList = (props) => {
  // Rendering the error if there are no expenses in the given year
  if (props.items.length === 0) {
    return (
      <Card className="error-message ">
        Sorry, no expenses available for this year
      </Card>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.price}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
