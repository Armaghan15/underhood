import React from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";

import "./ExpenseItems.css";

function ExpenseItems(props) {
  const expenses = props.expensesData;

  return (
    <Card className="expense-items">
      <ExpenseItem
        date={expenses[0].date}
        item={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>

      <ExpenseItem
        date={expenses[1].date}
        item={expenses[1].title}
        amount={expenses[1].amount}
      ></ExpenseItem>

      <ExpenseItem
        date={expenses[2].date}
        item={expenses[2].title}
        amount={expenses[2].amount}
      ></ExpenseItem>

      <ExpenseItem
        date={expenses[3].date}
        item={expenses[3].title}
        amount={expenses[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default ExpenseItems;
