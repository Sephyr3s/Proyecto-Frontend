import React, { useState, useEffect, useContext } from "react";
import {BsCart4} from "react-icons/bs";
import {BsCartPlus} from "react-icons/bs";

import { GlobalContext } from '../context/GlobalContext'

const Productitem = ({product, functionalButtons}) => {  
    
    const { carrito, addProductToCarrito, updateQuantityProductInCarrito } = useContext(GlobalContext)
    const [activeButtons, setActiveButtons] = useState("")

    useEffect(() => {
        functionalButtons ? setActiveButtons("button-enable") : setActiveButtons("button-disable")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const  wasAddedToCart = () => {
        return carrito.find(p => p.id === product.id) != null ? false : true
    }

    const handleClick = (e) => {
        if (e.target.name === "button-enable") {
            if (e.target.id === "add") {
                addProductToCarrito(product)
            }
            if (e.target.id === "increment") {
                updateQuantityProductInCarrito(product.id, "incrementar")
            }
        }
    }

    return (
       <div className="card card border-dark  bg-white">
         <div className="Container h-25 d-inline-block border" >  </div>
            <div className="card-header pb-0 "class="text-warning"> 
                 <p>{product.nombre || "Nombre"}</p> 
             </div>
            <div className="card-body" >
                 <h2 className="modal-title text-black" >$ {product.precio || "0000"}</h2>
                <div className="modal-footer border-0"> 
                <div className="btn btn-outline-dark text-black p-1"> details</div>
               { wasAddedToCart() ? 
                <button style={{ border: '1px solid white'}}  onClick={handleClick} type="button" id="add" name={activeButtons} className="btn btn-dark"> <BsCart4/> Add to car</button>
                :
                <button style={{ border: '1px solid white'}} onClick={handleClick} type="button" id="increment" name={activeButtons} className="btn btn-warning"> <BsCartPlus/> Add more</button>
               }
               </div> 
            </div>
                
        </div>
    )
}
export default Productitem

