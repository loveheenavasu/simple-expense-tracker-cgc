import { useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

function ExpenseTracker() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addTransaction = (transaction) => {
    const { type, title, amount } = transaction;

    const finalTransaction = {
      id: Date.now(),
      title,
      amount,
    };
    if (type === "expense") {
      // push to expenses
      setExpenses([finalTransaction, ...expenses]);
    } else if (type === "income") {
      // push to incomes
      setIncomes([finalTransaction, ...incomes]);
    }
  };

  return (
    <div className="wrapper">
      <TransactionForm addTransaction={addTransaction} />
      <div className="transactions-wrapper">
        <TransactionList title={"Income"} transactions={incomes} />
        <TransactionList title={"Expense"} transactions={expenses} />
      </div>
    </div>
  );
}

export default ExpenseTracker;
