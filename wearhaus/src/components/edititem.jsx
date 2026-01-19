import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function EditItemForm ({currentItem, toggleReload, setToggleReload}) {
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
            navigate('/')
        }catch (error) {
            console.error(error);
        }
    };



    return <div className="edit">
        <form onSubmit={handleSubmit}>
            <label>Name: <input name="name" value={formData.name} 
            onChange={handleChange}/></label>
            <label>Description: <input name="description" value={formData.description} 
            onChange={handleChange} /></label>
            <label>Quantity: <input name="quantity" type='number' value={formData.quantity} 
            onChange={handleChange} /></label>
            <button type="submit">Submit</button>
        </form>
    </div>
}

export default EditItemForm;