import React from "react";
import ItemRender from "./ItemRender";
import productList from "../json/productList.json";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
    return (
        <div className="itemlistcontainer">
            <div className="separator--blank"></div>
            <ItemCount nombre="Remera Chaos" initial="1" stock="10" />
            <section className="itemsContainer productos__grid" id="productosContainer">
                {
                    productList.map(item => {
                        return (
                            <div>
                                <ItemRender nombre={item.nombre} precio={item.precio} color={item.color} url="https://http2.mlstatic.com/D_NQ_NP_831858-MLA48044614602_102021-O.webp" />
                            </div>
                        )
                    })
                }
            </section>
            <div className="separator--blank"></div>
        </div>
    );
};

export default ItemListContainer;