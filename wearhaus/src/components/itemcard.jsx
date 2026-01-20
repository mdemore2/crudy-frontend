import '../styles/itemcard.css';
import { createElement } from 'react';

function createContent(item){
    return <div className='card'>
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <h5>Quantity: {item.quantity}</h5>
    </div>

}

function ItemCard({item, setIsOpen, setContent}){
    let content = createContent(item);

    const handleClick = (e) => {
        setContent(content);
        setIsOpen(true);
    }

    let description = ''
    if (item.description.length > 100){
        description = item.description.substring(0,100) + '...'
    } else {
        description = item.description
    }
    return <div className="card" onClick={handleClick}>
        <h5>{item.name}</h5>
        <p>{description}</p>
        <h5>Quantity: {item.quantity}</h5>
    </div>
}

export default ItemCard;