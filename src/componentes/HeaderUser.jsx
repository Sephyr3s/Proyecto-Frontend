import { Link } from 'react-router-dom'
import React from "react";
import { AuthContext } from '../context/AuthContext';

export default function HeaderUser() {
    
    const{isAuthenticated,logout} = React.useContext(AuthContext);
    const handleLogout = (ev)=>{
        ev.preventDefault();
        logout();
    }
    return (
        <nav>
          <ul className="nav justify-content-center bg-black ">
      
            <li>
              <Link className="nav-link text-white" to="/Login">Login</Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/Register">Register</Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/Products">Home</Link>
            </li>
            {isAuthenticated() && (<li>
              <a href="/#" onClick={handleLogout}>Salir</a>
            </li>)}
          </ul>
        </nav>
      );
}