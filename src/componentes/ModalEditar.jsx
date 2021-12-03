import React, { useContext, useEffect, useState } from "react"
import ProductForm from "./ProductForm";
import Productitem from "./Productitem";

import { GlobalContext } from '../context/GlobalContext'

const ModalEditar = () => {

  const { precio, productName, updateProduct, productEdit } = useContext(GlobalContext);

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
    setProduct({nombre: productName, precio: precio})
    console.log(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productEdit])

  return (
    <div
      className="modal fade"
      id="myModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Editar producto</h5>
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
            <button onClick={() => {updateProduct()}} data-dismiss="modal" type="button" className="btn btn-info" style={{width: '100%'}}>
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalEditar;