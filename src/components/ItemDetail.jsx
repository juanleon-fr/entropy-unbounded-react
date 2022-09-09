import ItemCount from './ItemCount';

const ItemDetail = ({ data, initial }) => {
    const { title, color, price, pictureUrl, description, stock } = data;
    return (
        <>
            <img src={pictureUrl} alt={title} />
            <div className="itemDetailData">
                <h3 className="itemTitle">{title}</h3>
                <span className="color">{color}</span>
                <span className="price">${price}</span>
                <p className="description">{description}</p>
                <ItemCount title={title} stock={stock} initial={initial} />
                <span className="stock">stock: {stock}</span>
            </div>
        </>
    )
}

export default ItemDetail