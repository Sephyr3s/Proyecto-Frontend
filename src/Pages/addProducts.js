import React, { useContext, useEffect, useState } from "react";
import ProductForm from "../componentes/ProductForm";
import Productitem from "../componentes/Productitem";
import { GlobalContext } from "../context/GlobalContext";
import HeaderTest from "../componentes/headerTest";


const AddProduct = () => {
  const { changeProductName,changeImage, changePrice, precio, productName,imagen  } = useContext(GlobalContext);

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
    setProduct({...product, ["imagen"]: imagen})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagen])


  useEffect(() => {
    changeProductName("")
     changeImage("")
     changePrice(0)
   
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <HeaderTest />
      <div className="row text-center py-5 w-100" style={{ marginTop: '1.5rem' }}>
        <h1 style={{ fontSize: 35 }}>Add product</h1>
        <p style={{ fontSize: 20 }}>
          Fill the form to continue
        </p>
      </div>
      <div className="row d-flex w-100 justify-content-around">
        <div className="col-md-4 mt-5">
          <ProductForm type={"crear"} />
        </div>
        <div className="col-md-4">
          <Productitem functionalButtons={false} product={product} />
        </div>
      </div>
    </>
  );
};

export default AddProduct;