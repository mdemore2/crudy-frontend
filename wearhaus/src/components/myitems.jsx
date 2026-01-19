import ItemCard from "./itemcard"
import { useEffect } from "react"
import "../styles/home.css"
import { useNavigate } from 'react-router-dom';
import MyItemCard from "./myitemcard";


function MyItems({items, currentItem, setCurrentItem, toggleReload, setToggleReload}){
    const navigate = useNavigate();

    return <div className="home">
    
        {items.map((item) => {
            return <MyItemCard key={item['id']} item={item} currentItem={currentItem} setCurrentItem={setCurrentItem} toggleReload={toggleReload} setToggleReload={setToggleReload}/>
        })}

    </div>
}

export default MyItems;