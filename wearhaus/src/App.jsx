import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Home from './components/home'
import LoginForm from './components/login'
import ItemForm from './components/edititem'

function App({page}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);

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

 if (page == "login"){
    return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
  } else if (page=="register") {
    return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
  } else if (page=="create-item") {
    return (
      <div>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <ItemForm isEdit={false}/>
      </div>
  )
  } else {
    return (
      <div>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Home items={items}/>
      </div>
    )
  }
}

export default App
