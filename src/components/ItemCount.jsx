import React, { useState } from "react";

function ItemCount(props) {

    const [count, setCount] = useState(Number(props.initial));


    function onAdd() {
        if (Number(props.stock >= 1)) {
            // aqui voy a quitar la cantidad de items agregados al carrito del array de items almacenados en un json
            alert(`${count} x ${props.nombre} agregado al carrito.`);

        }
    }

    return (
        <div className="card itemcount">
            <div className="itemName">
                <p>{props.nombre}</p>
            </div>
            <div className="counter card">
                <button onClick={() => { if (count > 1) { setCount(count - 1) } }}>-</button>
                <div>
                    <p>{count}</p>
                </div>
                <button onClick={() => { if (count < Number(props.stock)) { setCount(count + 1) } }}>+</button>
            </div>
            <button className="btn btn-color-30 width100" onClick={onAdd}>
                Sumar al carrito
            </button>
        </div>
    )
}

export default ItemCount