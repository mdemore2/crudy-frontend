import ItemCard from "./itemcard"
import { useEffect } from "react"
import "../styles/home.css"

function Home({items}){
    async function fetchItems(signal) {
    try {
      const response = await fetch('http://localhost:8000/inventory/all-items', {signal} );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Items fetched successfully:', data);
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
      throw error;
    }
  }


    useEffect(() => {
        console.log('Firing Effect')
    
        const controller = new AbortController();
        const signal = controller.signal;
        fetchItems(signal);
    
        
        return () => {
          console.log('Running cleanup')
          controller.abort();
        };
    
      },[]) //nothing in dependency array, only run on mount
    

    return <div className="home">
    
        {items.map((item) => {
            return <ItemCard key={item['id']} item={item}/>
        })}

    </div>
}

export default Home;