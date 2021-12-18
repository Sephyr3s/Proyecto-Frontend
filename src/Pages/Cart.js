import React, { useContext } from 'react';
import Header from '../componentes/Header';
import CardCost from '../componentes/CardCost';
import ProductCart from '../componentes/ProductCart'
import { GlobalContext } from "../context/GlobalContext";
import { Link } from 'react-router-dom'



const Cart = () => {

  const { totalItems } = useContext(GlobalContext);

    return (
        <>
            <Header />
           
                <div className="container" >
                    <div className="row text-center" style={{ paddingTop: '4rem' }} >
                        <h1 style={{fontSize: 35}}>Shopping Cart </h1>
                        <p style={{fontSize: 15}} >This is your shopping cart</p>
                    </div>
                    <div className="row pt-3" >
                        {totalItems !== 0 ? 
                            <>
                                <ProductCart/>
                                <CardCost/>
                            </>
                        : 
                            <div className="w-100 text-center" >
                                
                                <Link class=" text-dark" to="/Products" >
                                  <button className="btn btn-outline-info rounded-pill  p-1"> 
                                   <div >
                                        Proceed to shop
                                    </div>
                                    </button>
                                </Link>
                                
                                <p className="text-center" style={{ PaddingTop:"30 px", fontSize: '2rem'}}>Empty car!</p>
                                
                            </div>
                        }
                      </div>
                     </div>
               
        </>
    )
}

export default Cart;