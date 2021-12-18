import React from "react";
import { Link } from 'react-router-dom'

const HeaderTest = () => {
  return (
    <ul className="nav justify-content-center bg-black text-white" style={{ width: '100%', left: 0, top: 0, position: 'fixed', height: '3rem', backgroundColor: 'white', paddingTop: '.2rem', zIndex: '100', boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.15)'}} >
      <li className="nav-item  ">
        <Link className="nav-link text-white " to="/Products">Store</Link>
      </li>
    </ul>
  );
};

export default HeaderTest;