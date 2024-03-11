import "./Button.jsx";

const handleClick = () => alert();

export const Button = () => (
  <button id="button" className="container" onClick={handleClick}>
    Aceptar
  </button>
);
