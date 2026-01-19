import "../styles/login.css"
import { useEffect, useState } from 'react'

function LoginForm({isLoggedIn, setIsLoggedIn}){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
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
        };
        console.log(requestOptions);

        try {
            const response =  await fetch('http://127.0.0.1:8000/managers/login-user', requestOptions);
            let body = response.json();
            console.log(body);
            if (response.status == 200){
                setIsLoggedIn(true);
            }
        }catch (error) {
            console.error(error);
        }
    };

    return <div className="login">
        <form onSubmit={handleSubmit}>
            <label>Username: <input name="username" value={formData.username} 
            onChange={handleChange}/></label>
            <label>Password: <input name="password" value={formData.password} 
            onChange={handleChange} /></label>
            <button type="submit">Login</button>
        </form>
    </div>
}

export default LoginForm;