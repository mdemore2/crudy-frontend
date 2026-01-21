import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateItemForm ({toggleReload, setToggleReload}) {
  let BASE_URL = "http://localhost:8000";

  if (process.env.NODE_ENV == 'production'){
    BASE_URL = "http://wearhaus-backend.markdemore.com";
  }


    const navigate = useNavigate();

    const [formData, setFormData] = useState({
            name: '',
            description: '',
            quantity: '',
    });
     
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    async function handleSubmit(e){
        e.preventDefault();
        const data = new FormData();
        for (const [key, value] of Object.entries(formData)) {
            data.append(key, value);
        }
        const requestOptions = {
            method: 'POST',
            body: data,
            credentials: 'include',

        };
        console.log(requestOptions);
        try {
            const response =  await fetch(`${BASE_URL}/inventory/create-item`, requestOptions);
            let body = response.json();
            console.log(body);
            setToggleReload(!toggleReload);
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

export default CreateItemForm;