import React from "react";
import ProductsTable from "../componentes/productsTable";
import HeaderTest from "../componentes/headerTest";


const vistaProductos = () => {
  return (
    <>
      <HeaderTest  />
      <div className="row text-center pt-5 w-100">
        <h1 style={{ fontSize: 35 }}>Vista de productos</h1>
        <p style={{ fontSize: 20 }}>Lista de productos:</p>
        <ProductsTable />
      </div>
    </>
  );
};

export default vistaProductos