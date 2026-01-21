import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Home from './components/home'
import LoginForm from './components/login'
import MyItems from './components/myitems'
import CreateItemForm from './components/createitem'
import EditItemForm from './components/edititem'
import Register from './components/register'
import Modal from "./components/modal"
//import Modal from '@mui/material/Modal';

function App({page}) {
  const BASE_URL = "http://localhost:8000";

  if (process.env.NODE_ENV == 'production'){
    BASE_URL = "http://wearhaus-backend.markdemore.com";
  }
  
  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
  if (darkModePreference.matches){
    let htmlRoot = document.querySelector('html');
    htmlRoot.setAttribute('data-bs-theme', 'dark')
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);
  const [userItems, setUserItems] = useState([]);
  const [toggleReload, setToggleReload] = useState(false);
  const [currentItem, setCurrentItem] = useState([]);
  //modals
  const [content, setContent] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setisOpen(true);
  const handleClose = () => setisOpen(false);


  async function fetchItems(signal) {
    try {
      const response = await fetch(`${BASE_URL}/inventory/all-items`, {signal} );

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

  async function fetchUserItems(signal){
    try {
      const response = await fetch(`${BASE_URL}/inventory/my-items`,{credentials:'include'}, {signal} );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Items fetched successfully:', data);
      setUserItems(data);
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
    fetchUserItems(signal);

    
    return () => {
      console.log('Running cleanup')
      controller.abort();
    };

  },[toggleReload]) //nothing in dependency array, only run on mount

 if (page == "login"){
    return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} toggleReload={toggleReload} setToggleReload={setToggleReload}/>
    </div>
  )
  } else if (page=="register") {
    return (
    <div>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Register />
    </div>
  )
  } else if (page=="create-item") {
    return (
      <div>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <CreateItemForm toggleReload={toggleReload} setToggleReload={setToggleReload}/>
      </div>
  )
  }  else if (page=="edit-item") {
    return (
      <div>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <EditItemForm currentItem={currentItem} setCurrentItem={setCurrentItem} toggleReload={toggleReload} setToggleReload={setToggleReload}/>
      </div>
  )
  } else if (page=="my-items") {
    return (
      <div>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <MyItems items={userItems} currentItem={currentItem} setCurrentItem={setCurrentItem} toggleReload={toggleReload} setToggleReload={setToggleReload}/>
      </div>
  )
  } else {
    return (
      <div>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} content={content} ></Modal>

        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Home items={items} setIsOpen={setIsOpen} setContent={setContent}/>
      </div>
    )
  }
}

export default App
