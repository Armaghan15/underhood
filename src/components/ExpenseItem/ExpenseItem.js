import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../UI/Card/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.price);

  const titleChangeHandler = () => {
    let newTitleFromUser = prompt("Please enter a new title", title);
    setTitle(newTitleFromUser);
    // console.log(title);
  };

  const priceChangeHandler = () => {
    let newPriceFromUser = prompt("New Price: ", price);
    setPrice(newPriceFromUser);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div onClick={priceChangeHandler} className="expense-item__price">
            ${price}
          </div>
        </div>
        <button onClick={titleChangeHandler} className="expense-item__button">
          Change Title
        </button>
      </Card>
    </li>
  );
};
export default ExpenseItem;
