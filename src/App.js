import React from "react";

const MostraVoltas = ({ voltas }) => {
  return (
    <>
      <h1>{voltas}</h1>
      <p>voltas</p>
    </>
  );
};

const MostraTempo = ({ tempo }) => {
  return (
    <p>
      {tempo} <br />
      Tempo médio por volta
    </p>
  );
};
const Button = props => <button>{props.text}</button>;

function App() {
  return (
    <div className="App">
      <MostraVoltas voltas={12} />
      <button>+</button>
      <button>-</button>

      <MostraTempo tempo="01:30" />
      <Button text="Iniciar" />
      <Button text="Reiniciar" />
    </div>
  );
}

export default App;
