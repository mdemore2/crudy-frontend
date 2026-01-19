import { useEffect, useState } from 'react'

function LoginForm(){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
     
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };

        try {
            const response =  fetch('http://127.0.0.1:8000/managers/login-user', requestOptions).then(response => response.json());
        }catch (error) {
            console.error(error);
        }
    }

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