import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Register () {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            confirm_password: '',
        });
     
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    async function handleSubmit(e){
        e.preventDefault();
        if (formData.password != formData.confirm_password)
        {
            alert('Passwords do not match');
            return;
        }
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
            const response =  await fetch('http://localhost:8000/managers/register', requestOptions);
            let body = response.json();
            console.log(body);
            navigate('../login')
        }catch (error) {
            console.error(error);
        }
    };


    return <div className="edit">
        <form onSubmit={handleSubmit}>
            <label>First Name: <input name="first_name" value={formData.first_name} 
            onChange={handleChange}/></label>
            <label>Last Name: <input name="last_name" value={formData.last_name} 
            onChange={handleChange}/></label>
            <label>Username: <input name="username" value={formData.username} 
            onChange={handleChange}/></label>
            <label>Password: <input name="password" value={formData.password} 
            onChange={handleChange}/></label>
            <label>Confirm Password: <input name="confirm_password" value={formData.confirm_password} 
            onChange={handleChange}/></label>
            <button type="submit">Register</button>
        </form>
    </div>
}

export default Register;