import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const titleChangeHandler = () => {
    let newTitleFromUser = prompt("Please enter a new title", title);
    setTitle(newTitleFromUser);
    // console.log(title);
  };

  const amountChangeHandler = () => {
    let newAmountFromUser = prompt("New Amount: ", amount);
    setAmount(newAmountFromUser);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div onClick={amountChangeHandler} className="expense-item__price">
          ${amount}
        </div>
      </div>
      <button onClick={titleChangeHandler} className="expense-item__button">
        Change Title
      </button>
    </Card>
  );
};
export default ExpenseItem;
