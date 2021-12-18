import React, { useContext, useEffect, useState } from "react"
import ProductForm from "./ProductForm";
import Productitem from "./Productitem";
import { update } from '../services/ProductServices';
import { GlobalContext } from '../context/GlobalContext'
import {  toast } from 'react-toastify'

const ModalEditar = ({ reloadTriggerFunction, reloadTriggerValue }) => {

  const { precio, productName, imagen, productEdit } = useContext(GlobalContext);

  const [product, setProduct] = useState({nombre: "", precio: 0})
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["nombre"]: productName})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName])
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["precio"]: precio})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [precio])
  useEffect(() => {
    // eslint-disable-next-line no-useless-computed-key
    setProduct({...product, ["image"]: imagen})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagen])

  useEffect(() => {
    setProduct({nombre: productName, precio: precio, imagen:imagen})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productEdit])

  const handleClick = (e) => {
    e.preventDefault();
    if (!(productName === "" || precio === 0 || precio == null || isNaN(precio) || imagen === "")) {
      (async () => {
        try {
          const result = await update(productEdit.id, { name: productName, price: precio, image: imagen });
          console.log("PRODUCTO ACTUALIZADO => ", result.data);
        } catch (error) {
          console.log(error);        
        }
      })();
    //Alerta producto actualizado
    toast('🦄 Liquor actualized!', {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    reloadTriggerFunction(!reloadTriggerValue);
    }
    else {
      toast.error('Please, fill all fields!', {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  return (
    <div className="modal fade" id="myModal" tabindex="-1" role="dialog"  aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit liquor</h5>
            <button className="btn btn-danger close" type="button" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
          </div>
          <div className="modal-body">
            <div className="row d-flex justify-content-around">
              <ProductForm type={"editar"} />
              <Productitem functionalButtons={false} product={product} />
            </div>
          </div>
          <div className="modal-footer">
              <button onClick={handleClick} data-dismiss="modal" type="button" className="btn btn-info" style={{width: '100%'}}>
                Save
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditar;