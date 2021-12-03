import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ProductForm = ({ type }) => {

  const { addProduct, changePrice, changeProductName, precio, productName } = useContext(GlobalContext);

  const handleChange = (e) => {
    if (e.target.name === "productName") {
        changeProductName(e.target.value)
    }
    if (e.target.name === "precio") {
        changePrice(parseInt(e.target.value))
    }
  };

  const handleClick = (e) => {
    addProduct({ name: productName, precio: precio });
    changeProductName("Nombre")
    changePrice(0)
    toast.info('Ha producto al carrito!', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return (
    <form className="m-2">
      <div className="form-group mb-3">
        <label htmlFor="productName">Nombre</label>
        <input
          onChange={handleChange}
          type="text"
          className="form-control"
          id="productName"
          name="productName"
          placeholder="Product name"
          value={productName}
        />
      </div>
      
      <div className="form-group mb-3">
        <label htmlFor="precio">Precio</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
           <input
            onChange={handleChange} id="precio" name="precio" type="number" className="form-control" value={precio}
           />
          <span className="input-group-text">.00</span>
        </div>
      </div>
      
      {type === "crear" && <Link to="vistaProductos">
        <button onClick={handleClick} className="btn btn-info mb-3"style={{ width: "100%" }} > Añadir producto </button>
      </Link>
      }
    </form>
  );
};
export default ProductForm;