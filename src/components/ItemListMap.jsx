import Item from "./Item";
const ItemListMap = ({ data, key }) => {
    return (
        <section className="itemsContainer productos__grid" id="productosContainer">
            {
                data.map(item => {
                    key = item.id;
                    if (item.stock >= 1) {
                        return (
                            <Item key={item.id} title={item.title} price={item.price} color={item.color} pictureUrl={item.pictureUrl} />
                        )
                    }
                    return (
                        <></>
                    )
                })
            }
        </section>
    )
}

export default ItemListMap