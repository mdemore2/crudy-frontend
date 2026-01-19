import '../styles/itemcard.css';
import { useNavigate } from 'react-router-dom';


function MyItemCard({item, currentItem, setCurrentItem, toggleReload, setToggleReload}){
    const navigate = useNavigate();

    async function handleOnClick (e) {
        if (e.target.className == "deleteBtn")
        {
            console.log(`deleting item:${item.name}`)
            const requestOptions = {
                method: 'DELETE',
                credentials: 'include',

            };
            console.log(requestOptions);
            try {
                const response =  await fetch(`http://localhost:8000/inventory/delete-item/${item.id}`, requestOptions);
                let body = response.json();
                console.log(body);
                setToggleReload(!toggleReload);
                navigate('/')
            }catch (error) {
                console.error(error);
            }        
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