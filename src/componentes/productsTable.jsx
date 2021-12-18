import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { VscAdd } from "react-icons/vsc";
import { GlobalContext } from "../context/GlobalContext"
import ModalEditar from './ModalEditar.jsx'
import { remove } from '../services/ProductServices';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const ProductsTable = ({ reloadTriggerFunction, reloadTriggerValue }) => {

  const { products, setLiquorEdit } = useContext(GlobalContext);
  const handleDelete = (id) => {
    // deleteProduct(id)
    (async () => {
      try {
        const result = await remove(id);
        console.log("DELETE PRODUCT => ", result.data);

        
        toast.error(`Liquor <${id}> deleted`, {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });

        reloadTriggerFunction(!reloadTriggerValue)
      } catch (error) {
        console.log(error)
      }
    })();
  }

  const handleClick = (p) => {
    const buttonCloseToast = document.querySelector(".Toastify__close-button.Toastify__close-button--light");
    if (buttonCloseToast != null) {
      buttonCloseToast.click();
    }
    setLiquorEdit(p);
  }

  return (
    <>
      <div className="container" style={{ padding: "0 5rem" }}>
        <div className="row py-3 d-flex justify-content-between">
          <div className="col-3 p-0"> {products.length} liquors in inventary </div>
          <div className="col-3 p-0">
            <Link to="/addProducts">
              <button type="button" class="btn btn-success">
                Add liquor
                <VscAdd />
              </button>
            </Link>
          </div>
        </div>
        {
          products.length > 0 ? (<table class="table table-hover table-bordered table-sm w-100">
            <thead style={{ background: "#161616",color: "white",border: "1px solid white",}}>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map((p) => (
                  <tr key={p.id}>
                    <th scope="row">{p.id}</th>
                    <td>{p.nombre || "Without name"}</td>
                    <td>
                      <img src={p.imagen || "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912731_sumario_normal.jpg"} height="100%" width="30" alt="img" />
                    </td>
                    <td>$ {p.precio}</td>
                    <td>
                      <button onClick={() => handleClick(p)} name="editar" data-toggle="modal" data-target="#myModal" type="button" className="btn btn-info btn-sm m-1">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(p.id)} name="eliminar" type="button" className="btn btn-danger btn-sm m-1">
                        Delete
                      </button>
                      {<ToastContainer/> }
                    </td>
                  </tr>
                ))
              }
            </tbody>
           </table> ) :
          (
            <div className="w-100 pt-xl-5 pl-xl-4" >
                <p className="text-center pt-xl-5 pl-xl-4" style={{ fontSize: '3rem'}}>Without products on inventary!</p>
            </div>
          )
        }
      </div>
      <ModalEditar reloadTriggerFunction={reloadTriggerFunction} reloadTriggerValue={reloadTriggerValue} />
    </>
  );
};

export default ProductsTable;