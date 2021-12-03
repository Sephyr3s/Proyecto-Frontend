
export const getTotalItems = (carrito) => {
    return carrito.reduce((total, product) => total + product.quantity, 0);
}

export const getTotalPagar = (carrito) => {
    return carrito.reduce((total, product) => total + product.precio * product.quantity, 0);
}

export function appReducer(state, action) {
    console.log(state, action);
    switch (action.type) {

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

        case "ADD_PRODUCT":
            let product = {...action.payload.product, id: state.products.length+1 }
            console.log(product)
            return {
                ...state, products: [ ...state.products, product ]
            }
        
        case "DELETE_PRODUCT":
            return {
                ...state, products: state.products.filter(p => p.id !== action.payload.productId)
            }
        
        case "CHANGE_NAME":
            return {...state, productName: action.payload.productName}

        case "CHANGE_PRICE":
            return {...state, precio: action.payload.precio}
        
        case "SET_PRODUCT_EDIT":
            return {...state, productEdit: action.payload.product}

        case "UPDATE_PRODUCT":
            let indiceElemento = state.products.findIndex(p => p.id === state.productEdit.id)
            let products = [...state.products]
            products[indiceElemento] = { id: state.productEdit.id, nombre: state.productName,  precio: state.precio}
            console.log(products)
            return { ...state, products: products }
        
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
        
        case "DELETE_PRODUCT_TO_CARRITO":
            let partialState = state.carrito.filter(item => item.id !== action.payload.productId)
            return { 
                ...state,
                carrito: [ ...state.carrito.filter(item => item.id !== action.payload.productId) ],
                totalPagar: getTotalPagar(partialState),
                totalItems: getTotalItems(partialState)
            }
        
        case "UPDATE_QUANTITY_PRODUCT_IN_CARRITO":
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