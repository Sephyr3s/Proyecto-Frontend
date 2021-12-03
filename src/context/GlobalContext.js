import { createContext, useReducer } from "react";
import { productList } from "../utils/productList";
import { appReducer } from "./appReducer";


const initialState = {
  products: productList,
  productsFilter: productList,
  productName: "Nombre",
  precio: 0,
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

  const changePrice = (precio) => {
    dispatch({ type: "CHANGE_PRICE", payload: { precio } });
  };

  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: { product } });
  };

  const deleteProduct = (productId) => {
    dispatch({ type: "DELETE_PRODUCT", payload: { productId } });
  };

  const setProductEdit = (product) => {
    changeProductName(product.nombre);
    changePrice(product.precio);
    dispatch({ type: "SET_PRODUCT_EDIT", payload: { product } });
  };

  const updateProduct = () => {
    dispatch({ type: "UPDATE_PRODUCT" });
  };

  const addProductToCarrito = (product) => {
    dispatch({ type: "ADD_PRODUCT_TO_CARRITO", payload: { product } });
  };

  const updateQuantityProductInCarrito = (productId, operacion) => {
    dispatch({ type: "UPDATE_QUANTITY_PRODUCT_IN_CARRITO", payload: { productId, operacion } });
  };

  const deleteProductToCarrito = (productId) => {
    dispatch({ type: "DELETE_PRODUCT_TO_CARRITO", payload: { productId } });
  };

  const updateProductList = (match) => {
    dispatch({ type: "UPDATE_PRODUCT_LIST", payload: { match }})
  }

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        addProduct,
        changePrice,
        changeProductName,
        deleteProduct,
        setProductEdit,
        updateProduct,
        addProductToCarrito,
        deleteProductToCarrito,
        updateQuantityProductInCarrito,
        updateProductList
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};