import React, { Fragment, Component } from "react";

import "./normalize.css";
import "./skeleton.css";

import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import Mensaje from "./components/Mensaje";
import Spinner from "./components/Spinner";

import { calcularTotal } from "./helpers";
import { setTimeout } from "timers";

class App extends Component {
  state = {
    total: "",
    cantidad: "",
    plazo: "",
    cargando: false
  };
  datosPrestamo = (cantidad, plazo) => {
    const total = calcularTotal(cantidad, plazo);
    // this.setState({
    //   total,
    //   cantidad,
    //   plazo,
    //   cargando: true
    // });
    this.setState(
      {
        cargando: true
      }, () => {
        setTimeout(() => {
          this.setState({
            total,
            cantidad,
            plazo,
            cargando: false
          });
        }, 3000);
      }
    );
  };

  render() {
    const { total, plazo, cantidad, cargando } = this.state;
    let componente;
    if (total === "" && !cargando ) {
      componente = <Mensaje />;
    } else if (cargando) {
      componente = <Spinner/>
    }
    else {
      componente = (
        <Resultado total={total} plazo={plazo} cantidad={cantidad} />
      );
    }

    return (
      <Fragment>
        <h1>Cotizador de préstamos</h1>
        <div className="container">
          <Formulario datosPrestamo={this.datosPrestamo} />
          <div className="mensajes">{componente}</div>
        </div>
      </Fragment>
    );
  }
}
export default App;
