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
  const setProductEdit = (product) => {
    changeProductName(product.nombre);
    changeImage(product.imagen);
    changePrice(product.precio);
    dispatch({ type: "SET_PRODUCT_EDIT", payload: { product } });
  };


  const addProductToCarrito = (product) => {
    dispatch({ type: "ADD_PRODUCT_TO_CARRITO", payload: { product } });
  };
 
  const resetProdutToCarrito = (carrito,operacion) => {
    dispatch({type: "RESET_PRODUCT_TO_CARRITO", payload:{carrito,operacion}});
    }; 

  const updateQuantityProductInCarrito = (productId, operacion) => {
    dispatch({ type: "UPDATE_QUANTITY_PRODUCT_IN_CARRITO", payload: { productId, operacion } });
  };

  const deleteProductToCarrito = (productId) => {
    dispatch({ type: "DELETE_PRODUCT_TO_CARRITO", payload: { productId } });
  };

  const updateProductList = (match) => {
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: { match }});
  };

  const loadProducts = (productList) => {
    dispatch({ type: "LOAD_PRODUCTS", payload: { productList }});
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        changePrice,
        changeProductName, 
        setProductEdit,    
        changeImage,
        addProductToCarrito,
        deleteProductToCarrito,
        updateQuantityProductInCarrito,
        updateProductList,
        loadProducts,
        resetProdutToCarrito
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};