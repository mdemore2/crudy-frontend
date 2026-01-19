import "../styles/navbar.css"
import { Link } from "react-router-dom";

function NavBar({}){
    //TODO: update state
    return <div className="navbar">
        <h1>Wearhaus</h1>
        <ul>
            <li><Link to="/">All Items</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>

    </div>
}

export default NavBar;