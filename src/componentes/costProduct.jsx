import React, { useContext } from 'react'
import { GlobalContext } from "../context/globalContext";


const costProduct=()=> {

const { totalPagar, totalItems } = useContext(GlobalContext);


    return (
        <div className="col-md-4" style={{ minHeight: '65vh'}} >
            <div className="card text-white bg-dark mb-3" style={{maxWidth: '20rem'}}>
            <h3 className="card-header pt-4">Check out</h3>
            <div className="card-body  pt-4 ">
                <h5 className="card-title">Total products</h5>
                <p style={{ fontSize: '2rem' }} className="card-texts">{ totalItems }</p>
                <span aria-hidden="true"></span>
                <h5 className="card-title">Total to pay</h5>
                <p style={{ fontSize: '2rem' }} className="card-text">$ { totalPagar }</p>
            </div>
            <div className="card-footer">
                <button data-dismiss="modal" type="button" className="btn btn-success" style={{width: '100%', marginBottom: 10}}>
                  End purchase
                </button>
            </div>
            </div>
        </div>
    )
}

export default costProduct