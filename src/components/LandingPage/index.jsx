import "./style.css";

const Landing = ({ setRenderHome }) => {
  return (
    <section className="page">
      <div className="landingDiv">
        <h2>
          <span className="pinkSpan">Nu</span> Kenzie
        </h2>
        <h1>Centralize o controle das suas finanças</h1>
        <span className="whiteSpan">de forma rápida e segura</span>
        <button
          className="button-pink"
          type="button"
          onClick={() => setRenderHome(true)}
        >
          Iniciar
        </button>
      </div>
      <img src="../../illustration.png" alt="" />
    </section>
  );
};

export default Landing;
