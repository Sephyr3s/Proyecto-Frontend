import React, { useEffect, useContext, useState } from "react";
import HeaderTest from "../componentes/headerTest";
import { GlobalContext } from '../context/GlobalContext';
import { getAll } from '../services/ProductServices';
import { ToastContainer } from 'react-toastify';
import ProductsTable from "../componentes/productsTable";


const ViewProducts = () => {
  
  const { loadProducts} = useContext(GlobalContext);
  const [reloadTrigger,setReloadTrigger] = useState(true);

  useEffect(() => {
      (async () => {
          try {
              const result = await getAll();
              loadProducts(result.data);
              console.log("Data fetch admin", result.data);
          } catch (error) {
              console.log(error);            
          }
      })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[reloadTrigger])
  
  return (
    <>
      <HeaderTest />
      <div className="row text-center w-100" style={{ paddingTop: '4rem' }} >
        <h1 style={{ fontSize: 35 }}>View products</h1>
        <p style={{ fontSize: 20 }}>This is a liquors view</p>
      </div>
      <div className="row text-center w-100" style={{ paddingTop: '1rem' }} >
          <ProductsTable reloadTriggerFunction={setReloadTrigger} reloadTriggerValue={reloadTrigger}  />
        </div>
      <ToastContainer/>
    </>
  );
};

export default ViewProducts