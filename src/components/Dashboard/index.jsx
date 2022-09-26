import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import "../../App.css";
import TotalMoney from "./TotalMoney";

const Dashboard = ({ setRenderHome }) => {
  const [cards, setCards] = useState([]);

  return (
    <div>
      <Header setRenderHome={setRenderHome} />
      <div className="mainContainer">
        <div className="divForm">
          <Form setCards={setCards} />
          <TotalMoney cards={cards} />
        </div>
        <List cards={cards} setCards={setCards} />
      </div>
    </div>
  );
};

export default Dashboard;
