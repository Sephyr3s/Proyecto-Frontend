import React, { useContext } from "react";
import { GlobalContext } from '../context/GlobalContext'
import { Link } from 'react-router-dom'

const Header =() => {
  const { totalItems } = useContext(GlobalContext) 
  
    return (
      
       <>
        <ul className="nav justify-content-center bg-black " style={{ borderBottom: '2px solid purple'}}>
          
          <li className="nav-item  " >
            <Link className="nav-link text-white " to="/">Store</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-white" to="/About">About</Link>
          </li>
          <li className="nav-item">
           {totalItems !== 0 ?
            (<Link className="nav-link text-white" to="/Cart">  <img src="https://i.ibb.co/rk7cYPv/Seek-Png-com-grocery-cart-png-1344076.png" alt="carrito" /> Cart ({ totalItems })*</Link>)
           : (<Link className="nav-link text-white " to="/Cart"> <img src="https://i.ibb.co/rk7cYPv/Seek-Png-com-grocery-cart-png-1344076.png" alt="carrito" /> Cart ({ totalItems })</Link>)}          </li>
         
          <li className="nav-item">
           <Link className="nav-link  text-white " to="/vistaProductos">Update products </Link>
          </li>
        </ul>
     
        
        </>
      );      
};
export default Header;