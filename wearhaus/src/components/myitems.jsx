import ItemCard from "./itemcard"
import { useEffect } from "react"
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';


function MyItems({items}){
    const navigate = useNavigate();

    return <div className="home">
    
        {items.map((item) => {
            return <MyItemCard key={item['id']} item={item} />
        })}

    </div>
}

export default MyItems;