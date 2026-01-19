import ItemCard from "./itemcard"
import { useEffect } from "react"
import "../styles/home.css"

function Home({items}){
   

    return <div className="home">
    
        {items.map((item) => {
            return <ItemCard key={item['id']} item={item}/>
        })}

    </div>
}

export default Home;