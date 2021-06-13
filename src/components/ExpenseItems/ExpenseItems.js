import { findByTitle } from "@testing-library/dom";
import React, { useState } from "react";

import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "../ExpensesChart/ExpensesChart";
import Card from "../UI/Card/Card";

import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  const expenses = props.expensesData;

  const [filteredYear, setFilteredYear] = useState("2021");

  // Log the selected date from the ExpensesFilter.js on to the console
  const yearSelectHandler = (yearProvided) => {
    setFilteredYear(yearProvided);
  };

  // Filtering expense items according to the year selected
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // Adding the total cost of the filtered items
  let totalFilteredExpensesCost = 0;
  filteredExpenses.forEach((filteredExpense) => {
    totalFilteredExpensesCost += filteredExpense.price;
    totalFilteredExpensesCost = Math.trunc(totalFilteredExpensesCost);
  });

  // Returning Content/JSX Starts here
  return (
    <Card className="expense-items">
      <ExpensesFilter selected={filteredYear} yearLoger={yearSelectHandler} />
      <Card className="total-cost">
        <p>Total Cost:</p> ${totalFilteredExpensesCost}
      </Card>

      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default ExpenseItems;
