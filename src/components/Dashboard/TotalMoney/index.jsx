import "./style.css";

const TotalMoney = ({ cards }) => {
  let entradaArray = [];
  let despesaArray = [];

  cards.forEach((card) => {
    if (card.typeValue === "Entrada") {
      entradaArray.push(card);
    } else {
      despesaArray.push(card);
    }
  });

  const entradaTotal = entradaArray.reduce(function (
    previousValue,
    currentValue
  ) {
    return previousValue + Number(currentValue.value);
  },
  0);

  const despesaTotal = despesaArray.reduce(function (
    previousValue,
    currentValue
  ) {
    return previousValue + Number(currentValue.value);
  },
  0);

  const somaTotal = entradaTotal - despesaTotal;
  return (
    <section className="sectionValorTotal">
      <div className="divValorTotal">
        <h2 className="title-3">Valor Total:</h2>
        <span className="title-3">R${somaTotal},00</span>
      </div>
      <p>O valor se refere ao saldo</p>
    </section>
  );
};

export default TotalMoney;
