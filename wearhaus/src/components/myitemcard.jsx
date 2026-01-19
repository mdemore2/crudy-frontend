import '../styles/itemcard.css';
import { useNavigate } from 'react-router-dom';


function MyItemCard({item, currentItem, setCurrentItem}){
    const navigate = useNavigate();

    const handleOnClick =  (e) => {
        if (e.target.className == "deleteBtn")
        {
            console.log(`deleting item:${item.name}`)
            //delete
        } else {
            console.log(`editing item:${item.name}`)
            setCurrentItem(item)
            navigate('../edit-item')
        }
    }

    return <div className="card">
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <h5>Quantity: {item.quantity}</h5>
        <p class="editBtn" onClick={handleOnClick}>Edit</p> <p class="deleteBtn" onClick={handleOnClick}>Delete</p>
    </div>
}

export default MyItemCard;