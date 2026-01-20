import '../styles/itemcard.css';
import '../styles/mycard.css';
import { useNavigate } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiPencil } from '@mdi/js';
import { mdiTrashCan } from '@mdi/js';

function MyItemCard({item, currentItem, setCurrentItem, toggleReload, setToggleReload}){
    const navigate = useNavigate();

    async function handleOnClick (e) {

        let tgtClass = e.target.getAttribute("class");
        if (tgtClass == null)
        {
            tgtClass = e.target.parentElement.getAttribute('class');
        }
        
        console.log(`target class name: ${tgtClass}`)
        if (tgtClass == "deleteBtn")
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
                navigate('/my-items')
            }catch (error) {
                console.error(error);
            }        
        } else {
                console.log(`editing item:${item.name}`)
                setCurrentItem(item)
                navigate('../edit-item')
            }
    }

    return <div className="my-card card">
        <div class='fields'>
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <h5>Quantity: {item.quantity}</h5>
        </div>
        <div class="button-container">
            <Icon path={mdiPencil} size={1} class="editBtn" onClick={handleOnClick} /> 
            <Icon path={mdiTrashCan} size={1} class="deleteBtn" onClick={handleOnClick} />

        </div>
    </div>
}

export default MyItemCard;