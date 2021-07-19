import React,{useState} from "react";
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from '../UI/Cards'

const ExpenseItem = (props) => {
    const [title, setTitle]=useState(props.title);
    const clickHander = () => {
        setTitle('upadted!');
        alert(title);
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHander}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;