import React, { useContext, useState, useEffect } from "react";
import Productitem from "./Productitem";
import { GlobalContext } from '../context/GlobalContext';


const Products = () => {

  const [busqueda, setBusqueda] = useState(false)
  const [match, setMatch] = useState("")
  const { products, productsFilter, updateProductList } = useContext(GlobalContext)
  const [productsToList, setProductsToList] = useState([])

  const handleChange = e => {
    setMatch(e.target.value)
    updateProductList(e.target.value)
    setBusqueda(e.target.value !== "")
  }

  useEffect(() => {
    setProductsToList(productsFilter)      
  }, [products, productsFilter])
  
  useEffect(() => {
    console.log("Render de products", products);
    setProductsToList(products)      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  function mostrarResultadoDeBusqueda() {
    console.log(busqueda);
    if (busqueda && productsFilter.length === 0) {
      return <p className="pt-3">Search results: {productsFilter.length} </p>;
    }
    else if (busqueda && productsFilter.length !== 0) {
      return <p className="pt-3">Search results: {productsFilter.length} </p>;
    }
    else {
      return <p className="pt-3">{products.length} Liquors in catalogue </p>;
    }
  }

  return (
    <div >
      <div className="row justify-content-between  " >
        <div className="col-md-4">
          {mostrarResultadoDeBusqueda()}
        </div>
        <div className="col-md-4">
          <form className="">
            <input  className="form-control me-sm-2"  type="text"  placeholder="Search"  onChange={handleChange}  value={match}
            />
          </form>
        </div>
      </div>

      <div className="row px-3" style={{paddingBottom: "10 px"}}> 
      {
          productsToList.length > 0 ? (
            productsToList.map((p, i) => (
              <div key={i} className="col-md-4">
                  <Productitem functionalButtons={true} product={p} />
              </div>
            ))
          ) :
          (
            <div className="w-100" >
          
                <p className="text-center" style={{ fontSize: '1.5rem'}}>There are not liquors in the catalogue!</p>
            </div>
          )
      }
      </div>
    </div>
  );
};


export default Products;