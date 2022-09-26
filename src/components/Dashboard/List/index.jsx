import { useState } from "react";
import "./style.css";

const List = ({ cards, setCards }) => {
  const [filter, setFilter] = useState("");
  const filteredList = cards.filter((card) =>
    filter === "" ? true : card.typeValue === filter
  );

  return (
    <section className="sectionList">
      <div className="divList">
        <h2 className="title-3">Resumo financeiro</h2>
        <div className="buttonList">
          <button
            className="button-grey"
            key="Todos"
            onClick={() => setFilter("")}
          >
            Todos
          </button>
          <button
            className="button-grey"
            key="Entrada"
            onClick={() => setFilter("Entrada")}
          >
            Entrada
          </button>
          <button
            className="button-grey"
            key="Saida"
            onClick={() => setFilter("Saida")}
          >
            Despesas
          </button>
        </div>
      </div>
      <ul className="ulSummary">
        {filteredList.map((card, index) => (
          <li
            className={`card ${
              card.typeValue === "Entrada" ? "greenBorder" : "greyBorder"
            }`}
            greenBorder
            key={index}
          >
            <div className="divCard">
              <h3 className="title-3">{card.description}</h3>
              <div className="divTrash">
                <span>R$ {card.value},00</span>
                <img
                  src="../../ButtonTrash.png"
                  alt=""
                  onClick={() => removeCard(card)}
                />
              </div>
            </div>
            <span>{card.typeValue}</span>
          </li>
        ))}
      </ul>
    </section>
  );

  function removeCard(deletedCard) {
    const newCardList = cards.filter((card) => card !== deletedCard);

    setCards(newCardList);
  }
};

export default List;
