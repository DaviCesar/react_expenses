import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Papel Toalha",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "Tv Nova",
      amount: 799.49,
      date: new Date(2004, 1, 27),
    },
    {
      id: "e3",
      title: "Seguro do Carro",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Mesa de Madeira",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
