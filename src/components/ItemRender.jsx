import React from "react";
import SpecialBtn from "./SpecialBtn"

const ItemRender = (props) => {
    return (
        <div className="card bg-color-60 product--card box-shadow translate-on-hover">
            <div className="product--card__img">
                <img src={props.url} alt={props.nombre} />
                <p className="color-60 bg-color-30 precio">${props.precio}</p>
            </div>
            <div className="product--card__data">
                <div className="product--card__data__details">
                    <h3 className="color-30">{props.nombre}</h3>
                    <h4 className="color-30">{props.color}</h4>
                </div>
                <SpecialBtn color="color-30" input="Al carrito"/>
            </div>
        </div>
    )
}

export default ItemRender