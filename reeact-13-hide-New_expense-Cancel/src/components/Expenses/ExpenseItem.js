import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Cards";

const ExpenseItem = (props) => {
  // const [title, setTitle]=useState(props.title);
  // const clickHander = () => {
  //     setTitle('upadted!');
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {
          //<button onClick={clickHander}>Change Title</button>
          //with state the title never chhanges
        }
      </Card>
    </li>
  );
};

export default ExpenseItem;
