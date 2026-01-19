import ItemCard from "./itemcard"
import { useEffect } from "react"
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';
import MyItemCard from "./myitemcard";


function MyItems({items, currentItem, setCurrentItem}){
    const navigate = useNavigate();

    return <div className="home">
    
        {items.map((item) => {
            return <MyItemCard key={item['id']} item={item} currentItem={currentItem} setCurrentItem={setCurrentItem} />
        })}

    </div>
}

export default MyItems;