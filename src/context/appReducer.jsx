
export const getTotalItems = (carrito) => {
    return carrito.reduce((total, product) => total + product.quantity, 0);
}

export const getTotalPagar = (carrito) => {
    return carrito.reduce((total, product) => total + product.precio * product.quantity, 0);
}

export function appReducer(state, action) {
    switch (action.type) {

        case "LOAD_LIQUORS":
            return {
                ...state, products: action.payload.productList, productsFilter: action.payload.productList 
            }

        case "UPDATE_PRODUCT_LIST":
            if (action.payload.match !== "") {
                console.log("EL filter se refresca");
                return {
                    ...state, productsFilter: state.products.filter(p => p.nombre.toUpperCase().includes(action.payload.match.toUpperCase()))
                }
            }
            else {
                return {
                    ...state, productsFilter: state.products
                }
            }

        
        case "CHANGE_NAME":
            return {...state, productName: action.payload.productName}

        case "CHANGE_PRICE":
            return {...state, precio: action.payload.precio}
        
        case "SET_LIQUOR_EDIT":
            return {...state, productEdit: action.payload.product}
            
        
        case "ADD_PRODUCT_TO_CARRITO":
            if (!state.carrito.find(item => item.id === action.payload.product.id)) {
                state.carrito.push({
                    ...action.payload.product, quantity: 1
                });
            }
            return { 
                ...state, 
                carrito: [ ...state.carrito ],
                totalPagar: getTotalPagar(state.carrito),
                totalItems: getTotalItems(state.carrito)
            }
        
        case "DELETE_LIQUOR_IN_CARRITO":
            let partialState = state.carrito.filter(item => item.id !== action.payload.productId)
            return { 
                ...state,
                carrito: [ ...state.carrito.filter(item => item.id !== action.payload.productId) ],
                totalPagar: getTotalPagar(partialState),
                totalItems: getTotalItems(partialState)
            }
        
        case "QUANTITY_LIQUORS_IN_CARRITO":
            if (action.payload.operacion === "incrementar") {
                let partialState = {
                    ...state,
                    carrito: state.carrito.map(item => {
                        if (item.id === action.payload.productId) {
                            return {...item, quantity: item.quantity + 1}
                        }
                        else {
                            return item
                        }
                    })
                }
                return { 
                    ...partialState,
                    totalPagar: getTotalPagar(partialState.carrito),
                    totalItems: getTotalItems(partialState.carrito)
                }
            }
            if (action.payload.operacion === "decrementar") {
                let partialState = {
                    ...state,
                    carrito: state.carrito.map(item => {
                        if (item.id === action.payload.productId) {
                            return {...item, quantity: item.quantity - 1}
                        }
                        else {
                            return item
                        }
                    })
                }           
                return { 
                    ...partialState,
                    totalPagar: getTotalPagar(partialState.carrito),
                    totalItems: getTotalItems(partialState.carrito)
                }
            }
            
            

            break

        default:
            return state
    }


}