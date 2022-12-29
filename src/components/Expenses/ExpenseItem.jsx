import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const resetAmount = () => {
    setAmount(0.0);
    alert("Valor Resetado");
  };

  const clickHandler = () => {
    setTitle("Updated");
    alert("Titulo Atualizado");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">R$ {amount}</div>
      </div>
      <button onClick={clickHandler}>Mudar Título</button>
      <button onClick={resetAmount}>Resetar</button>
    </Card>
  );
};

export default ExpenseItem;
