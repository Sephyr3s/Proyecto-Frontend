import React, { useContext,useRef } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {create} from '../services/ProductServices'

const ProductForm = ({ type }) => {

  const redirection = useRef(null);
  const { changePrice, changeImage, changeProductName, precio, productName, imagen } = useContext(GlobalContext);
 
  const handleChange = (e) => {
    if (e.target.name === "productName") {
        changeProductName(e.target.value)
    }
    if (e.target.name === "precio") {
        changePrice(parseInt(e.target.value))
    }
  };

  //Acción crear licor
  const handleClick = (e) => {
    e.preventDefault();
    if (!(productName === "Unnamed" || precio === 0 || precio == null || isNaN(precio) || imagen === "")) {
      (async () => {
        try {
          const result = await create({ nombre: productName, precio: precio, image: imagen });
          console.log("PRODUCT CREATED => ", result.data);
        } catch (error) {
          console.log(error);
        }
      })();
  
      changeProductName("Without name")
      changePrice(0)
      changeImage("https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912731_sumario_normal.jpg")
      redirection.current.click();
    }
    else {
      toast.warn('Make sure to fill the fields', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
    
  };

  return (
    <>
    <form className="m-2">
      <div className="form-group mb-3">
        <label htmlFor="productName">Name</label>
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
          <label htmlFor="image">Url</label>
          <div className="input-group">
            <input
              onChange={handleChange}
              id="image"
              name="image"
              type="url"
              className="form-control"
              placeholder="https://"
              value={imagen}
            />
          </div>
        </div>
      <div className="form-group mb-3">
        <label htmlFor="precio">Price</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
           <input
            onChange={handleChange} id="precio" name="precio" type="number" className="form-control" value={precio}
           />
          <span className="input-group-text">.00</span>
        </div>
      </div>
      
      {type === "crear" && <Link to="vistaProductos">
        <button onClick={handleClick} className="btn btn-info mb-3"style={{ width: "100%" }} > Add liquor </button>
      </Link>
      }
    </form>
    <ToastContainer/>
    </>
  );
};
export default ProductForm;