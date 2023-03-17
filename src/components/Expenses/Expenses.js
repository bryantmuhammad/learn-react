import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeExpenseFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeExpenseFilter={changeExpenseFilterHandler}
      />

      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={Math.random()}
        />
      ))}
    </Card>
  );
}

export default Expenses;
