import React from 'react';
const Resultado = (props) => {
    return (
        <div className="u-full-width resultado">
            <h2>Resultados</h2>
            <p>Cantidad solicitada: ${props.cantidad}</p>
            <p>Plazo de pago: {props.plazo} meses</p>
            <p>Total a pagar: ${props.total}</p>
            <p>Su pago mensual es de : $ { (props.total / props.plazo).toFixed(2)}</p>

        </div>
     );
}

export default Resultado;