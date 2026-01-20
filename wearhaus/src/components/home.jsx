import ItemCard from "./itemcard"
import { useEffect, useState } from "react"
import "../styles/home.css"
import Modal from "./modal"

function Home({items, setIsOpen, setContent}){


    return <div className="home">
    
        {items.map((item) => {
            return <ItemCard key={item['id']} item={item} setIsOpen={setIsOpen} setContent={setContent}/>
        })}

    </div>
}

export default Home;