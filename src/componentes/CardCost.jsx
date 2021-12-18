import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalContext";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const CardCost = () => {

  const { totalPagar, totalItems } = useContext(GlobalContext);
    //carrito.splice(0,carrito.length)
    const handleClick = () => {
      toast('Gracias por su compra!', {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

    return (
        <div className="col-md-4" style={{ minHeight: '65vh'}} >
            <div className="card text-white bg-black text-center mb-3" style={{maxWidth: '20rem'}}>
            <h3 className="card-header pt-4 "style={{color: "deeppink"}}>Pay up</h3>
            <div className="card-body pt-4">
                <h5 className="card-title " style={{color: "Violet"}}>Liquors quantity</h5>
                <p style={{ fontSize: '1.5  rem',color:"silver "}} className="card-text">{ totalItems }</p>
                <span aria-hidden="true"></span>
                <h5 className="card-title "style={{ fontSize: '1.5rem',color:"darkviolet"}}>Total to pay</h5>
                <p style={{ fontSize: '1.5rem',color:"tomato "}} className="card-text">$ { totalPagar }</p>
            </div>
            <div className="card-footer">
                  <button onClick={handleClick} data-dismiss="modal" type="button " className="btn btn-outline-warning rounded-pill" style={{width: '40%', marginBottom: 10}}>
                    Buy
                  </button>
                <ToastContainer/>
            </div>
            </div>
        </div>
    )
}

export default CardCost