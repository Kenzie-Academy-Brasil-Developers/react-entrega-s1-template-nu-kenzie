import { useState } from "react";
import "./style.css";

const Form = ({ setCards }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [typeValue, setTypeValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    //   setCards([...cards, { description, value, typeValue }]);
    setCards((previousCards) => [
      ...previousCards,
      { description, value, typeValue },
    ]);
    setDescription("");
    setValue("");
    setTypeValue("");
  }

  return (
    <section className="sectionForm">
      <form onSubmit={handleSubmit}>
        <div>
          <p>Descrição</p>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            id="descriptionInput"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
          <span>Ex: Compra de roupas</span>
        </div>
        <div className="divValues">
          <div>
            <p>Valor</p>
            <input
              type="number"
              placeholder="R$"
              id="valorInput"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              required
            />
          </div>
          <div>
            <p>Tipo de valor</p>
            <select
              id="selectValue"
              value={typeValue}
              onChange={(event) => setTypeValue(event.target.value)}
              required
            >
              <option value="" disabled>
                Escolha o valor
              </option>
              <option value="Entrada">Entrada</option>
              <option value="Saida">Saída</option>
            </select>
          </div>
        </div>
        <button className="button-pink" type="submit">
          Inserir valor
        </button>
      </form>
    </section>
  );
};

export default Form;

/* <li className="card grayBorder">
          <div className="divCard">
            <h3 className="title-3">Salário - Mês Dezembro</h3>
            <div className="divTrash">
              <span>R$ 6.660,00</span>
              <img src="../../ButtonTrash.png" alt="" />
            </div>
          </div>
          <span>Entrada</span>
        </li> */
