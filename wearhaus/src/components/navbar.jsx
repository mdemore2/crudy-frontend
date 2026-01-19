import "../styles/navbar.css"
import { Link } from "react-router-dom";

function NavBar({isLoggedIn, setIsLoggedIn}){
    //TODO: update state
    async function logout(setIsLoggedIn){
        const response = await fetch("http://localhost:8000/managers/logout-user");
        const result = await response.json();
        console.log(result);
        if (response.ok){
            setIsLoggedIn(false);
        }

    }

    if (isLoggedIn){
        return <div className="navbar">
            <h1>Wearhaus</h1>
            <ul>
                <li><Link to="/">All Items</Link></li>
                <li><Link to="/my-items">My Items</Link></li>
                <li><Link to="/create-item">Create Item</Link></li>
                <li><Link to="/" onClick={(event) => {logout(setIsLoggedIn)}}>Logout</Link></li>
            </ul>
        </div>
    } else {
        return <div className="navbar">
            <h1>Wearhaus</h1>
            <ul>
                <li><Link to="/">All Items</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    }


}

export default NavBar;