import "./style.css";

const Header = ({ setRenderHome }) => {
  return (
    <header>
      <nav>
        <h1>
          <span className="pinkSpan">Nu</span> Kenzie
        </h1>
        <button
          className="button-grey"
          onClick={() => setRenderHome(false)}
          type="button"
        >
          Início
        </button>
      </nav>
    </header>
  );
};

export default Header;
