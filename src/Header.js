import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import './Header.css'
import ReorderIcon from '@mui/icons-material/Reorder'
import { useState,useEffect } from 'react'


function Header() {
   const[expandNavbar,setExpandNavbar] = useState(false);
   
   const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    },[location] )

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close" }>
        <div className='toggleButton'>
            <button onClick={() => {
                setExpandNavbar((prev) => !prev);
                }}>
                <ReorderIcon/>
            </button>
        </div>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to="/about">About</Link>
            <h2 className="head"> || RANDOM QUOTE GENERATOR || </h2>
            <br>
            </br>
        </div>
    </div>
  )
}

export default Header