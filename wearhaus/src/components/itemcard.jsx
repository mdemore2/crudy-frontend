import '../styles/itemcard.css';

function ItemCard({item}){
    let description = ''
    if (item.description.length > 100){
        description = item.description.substring(0,100) + '...'
    } else {
        description = item.description
    }
    return <div className="card">
        <h5>{item.name}</h5>
        <p>{description}</p>
        <h5>Quantity: {item.quantity}</h5>
    </div>
}

export default ItemCard;