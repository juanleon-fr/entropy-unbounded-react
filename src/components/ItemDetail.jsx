import ItemCount from "./ItemCount";

const ItemDetail = ({ data, initial }) => {
    console.log({ data })
    return (
        <>
            <img src={data.pictureUrl} alt={data.title} />
            <div className="itemDetailData">
                <h3 className="itemTitle">{data.title}</h3>
                <span className="color">{data.color}</span>
                <span className="price">${data.price}</span>
                <p className="description">{data.description}</p>
                <ItemCount title={data.title} stock={data.stock} initial={initial} />
                {/* agrego evento onclick arriba*/}
            </div>
        </>
    )
}

export default ItemDetail