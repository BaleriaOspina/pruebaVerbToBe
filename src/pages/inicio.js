import React from "react";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <h1>SOY LA PAGINA DE INICIO</h1>
        <button type="button" class="btn btn-warning">
          <a href="registro">continuar</a>
        </button>
      </div>
    );
  }
}

export default Inicio;
