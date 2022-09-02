import React, { useState } from "react";

function ItemCount({title,stock,initial}) {

    const [count, setCount] = useState(initial);


    function onAdd() {
        if (stock >= 1) {
            // aqui voy a quitar la cantidad de items agregados al carrito del array de items almacenados en un json
            alert(`${count} x ${title} agregado al carrito.`);

        }
    }

    function itemAdder(op) {
        if (op==="substract") {
            if (count > 1) { setCount(count - 1) }
        }
        if (op==="add") {
            if (count < stock) { setCount(count + 1) }
        }
    }

    return (
        <div className="card itemcount">
            <div className="itemName">
                <p>{title}</p>
            </div>
            <div className="counter card">
                <button onClick={() => itemAdder('substract')}>-</button>
                <div>
                    <p>{count}</p>
                </div>
                <button onClick={() => itemAdder('add')}>+</button>
            </div>
            <button className="btn btn-color-30 width100" onClick={onAdd}>
                Sumar al carrito
            </button>
        </div>
    )
}

export default ItemCount