import Expenses from "./components/Expenses.jsx";

function App() {
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
    {
      id: "e5",
      title: "Bola de Futebol",
      amount: 738.2,
      date: new Date(2022, 7, 12),
    },
    {
      id: "e6",
      title: "Lixo",
      amount: 234.12,
      date: new Date(2023, 2, 6),
    },
  ];
  return (
    <div>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
