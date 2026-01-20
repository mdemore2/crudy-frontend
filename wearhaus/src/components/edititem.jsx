import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/itemcard.css';
import '../styles/mycard.css';

function EditItemForm ({setIsEdit, currentItem, toggleReload, setToggleReload}) {
    const navigate = useNavigate();
    console.log(currentItem.name);
    const [formData, setFormData] = useState({
            name: currentItem.name,
            description: currentItem.description,
            quantity: currentItem.quantity,
    });

    
     
    console.log(formData);
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    async function handleSubmit(e){
        e.preventDefault();

        const requestOptions = {
            method: 'PUT',
            body: JSON.stringify(formData),
            credentials: 'include',

        };
        console.log(requestOptions);
        try {
            const response =  await fetch(`http://localhost:8000/inventory/edit-item/${currentItem.id}`, requestOptions);
            let body = response.json();
            console.log(body);
            setToggleReload(!toggleReload);
            setIsEdit(false);
            navigate('/my-items')
        }catch (error) {
            console.error(error);
        }
    };



    return <div className="card">
        <form onSubmit={handleSubmit}>
            <label class='form-label'>Name: <input class='form-control' name="name" value={formData.name} 
            onChange={handleChange}/></label>
            <label class='form-label'>Description: <textarea class='form-control' name="description" value={formData.description} 
            onChange={handleChange} /></label>
            <label class='form-label'>Quantity: <input class='form-control' name="quantity" type='number' value={formData.quantity} 
            onChange={handleChange} /></label>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default EditItemForm;