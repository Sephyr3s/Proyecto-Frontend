import { createContext, useReducer } from "react";
import { appReducer } from "./appReducer";

const initialState = {
  products: [],
  productsFilter: [],
  productName: "Unnamed",
  precio: 0,
  imagen: "https://ep01.epimg.net/elcomidista/imagenes/2020/08/31/articulo/1598909097_396757_1598912731_sumario_normal.jpg",
  productEdit: {},
  carrito: [],
  totalPagar: 0,
  totalItems: 0
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeProductName = (productName) => {
    dispatch({ type: "CHANGE_NAME", payload: { productName } });
  };
  const changeImage = (imagen) => {
    dispatch({ type: "CHANGE_IMAGE", payload: { imagen } });
  };

  const changePrice = (precio) => {
    dispatch({ type: "CHANGE_PRICE", payload: { precio } });
  };
  const setLiquorEdit = (product) => {
    changeProductName(product.nombre);
    changeImage(product.imagen);
    changePrice(product.precio);
    dispatch({ type: "SET_LIQUOR_EDIT", payload: { product } });
  };


  const addLiquorInCarrito = (product) => {
    dispatch({ type: "ADD_PRODUCT_TO_CARRITO", payload: { product } });
  };
 
  const resetProdutToCarrito = (carrito,operacion) => {
    dispatch({type: "RESET_PRODUCT_TO_CARRITO", payload:{carrito,operacion}});
    }; 

  const QuantityLiquorsInCarrito = (productId, operacion) => {
    dispatch({ type: "QUANTITY_LIQUORS_IN_CARRITO", payload: { productId, operacion } });
  };

  const deleteLiquorInCarrito = (productId) => {
    dispatch({ type: "DELETE_LIQUOR_IN_CARRITO", payload: { productId } });
  };

  const updateLiquorList = (match) => {
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: { match }});
  };

  const loadLiquors = (productList) => {
    dispatch({ type: "LOAD_LIQUORS", payload: { productList }});
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        changePrice,
        changeProductName, 
        setLiquorEdit,    
        changeImage,
        addLiquorInCarrito,
        deleteLiquorInCarrito,
        QuantityLiquorsInCarrito,
        updateLiquorList,
        loadLiquors,
        resetProdutToCarrito
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};