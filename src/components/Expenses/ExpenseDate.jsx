import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  let month = props.date.toLocaleString("pt-BR", { month: "long" });
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" });
  const year = props.date.getFullYear("pt-BR", { year: "2-digit" });
  month = month.charAt(0).toUpperCase() + month.slice(1);

  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
