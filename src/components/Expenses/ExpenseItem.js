import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("Clicked!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>
        <h2 className="expense-item__description">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Me</button>
    </Card>
  );
};

export default ExpenseItem;
