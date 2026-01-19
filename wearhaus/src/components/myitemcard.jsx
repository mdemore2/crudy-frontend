import '../styles/itemcard.css';

function MyItemCard({item}){
    return <div className="card">
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <h5>Quantity: {item.quantity}</h5>
        <p>Edit</p> <p>Delete</p>
    </div>
}

export default MyItemCard;