import React, { Component } from 'react';
class Formulario extends Component {
    state = {
        cantidad: '',
        plazo: '',
    }
    actualizarState = (e) => {
        //lee los datos del formulario
        const { name, value } = e.target;
        this.setState({
            [name] : Number(value)
        });
    }

    habilitarSubmit = () => {
        const {cantidad, plazo} = this.state;
        const invalido = !cantidad || !plazo;
        return invalido
    }

    calcularPrestamo = (e) => {
        e.preventDefault();
        const { cantidad, plazo } = this.state;
        this.props.datosPrestamo(cantidad, plazo);
    }

    render() {
        return (
            <form onSubmit={ this.calcularPrestamo }>
                <div>
                    <label htmlFor="cantidad-prestamo">Cantidad a prestar: </label>
                    <input 
                        onChange={ this.actualizarState }
                        id="cantidad-prestamo" 
                        type="number" name="cantidad" className="u-full-width" placeholder="Ejemplo: 4000"/>
                </div>
                <div>
                    <label htmlFor="cantidad-pagar">Plazo para pagar: </label>
                    <select 
                    onChange={ this.actualizarState }
                    id="cantidad-pagar" name="plazo" className="u-full-width">
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                    <input 
                    disabled={this.habilitarSubmit()}
                    type="submit" 
                    value="Calcular" className="u-full-width button-primary"/>
                </div>
            </form>
         );
    }
}

export default Formulario;