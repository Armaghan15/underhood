import React from "react";

// Importing external files
import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const addExpenseHandler = (expense) => {
  console.log("In App.js");
  console.log(expense);
};

const App = () => {
  return (
    <div>
      <h2 className="site-heading">UnderHood</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseItems expensesData={expenses}></ExpenseItems>
    </div>
  );
};

export default App;
