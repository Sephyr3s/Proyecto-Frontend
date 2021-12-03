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
           
                <div className="container bgimage" >
                    <div className="row text-center" style={{ paddingTop: '4rem' }} >
                        <h1 style={{fontSize: 35}}>Shopping Car </h1>
                        <p style={{fontSize: 15}} >This is your shopping car</p>
                    </div>
                    <div className="row pt-3" >
                        {totalItems !== 0 ? 
                            <>
                                <ProductCart/>
                                <CardCost/>
                            </>
                        : 
                            <div className="w-100 text-center" >
                                <button className="btn btn-outline-light rounded-pill  p-1">
                                <Link class=" text-dark" to="/Products" >
                                    <div >
                                        <p>proceed to shop</p>
                                    </div>
                                </Link>
                                </button>
                                <p className="text-center" style={{ PaddingTop:"30 px", fontSize: '2rem'}}>Empty car!</p>
                                
                            </div>
                        }
                      </div>
                     </div>
               
        </>
    )
}

export default Cart;