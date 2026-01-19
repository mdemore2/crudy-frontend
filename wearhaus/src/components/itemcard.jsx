function ItemCard({item}){
    //TODO: implement :)
    return <div className="card">
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <h5>{item.quantity}</h5>
    </div>
}

export default ItemCard;