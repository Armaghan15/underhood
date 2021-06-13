import React, { useState } from "react";

// Importing external files
import ExpenseItems from "./components/ExpenseItems/ExpenseItems";
import NewExpense from "./components/NewExpense/NewExpense";

const EXPENSE_ITEMS = [
  {
    id: "e1",
    title: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    price: 450,
    date: new Date(2021, 5, 12),
  },

  {
    id: "e5",
    title: "Rode NT USB",
    price: 467,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // State for our expense items array
  const [expenses, setExpenses] = useState(EXPENSE_ITEMS);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <h2 className="site-heading">UnderHood</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <ExpenseItems expensesData={expenses}></ExpenseItems>
    </div>
  );
};

export default App;
