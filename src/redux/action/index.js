// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}


// For Delete Item From Cart
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}
export const changeCart=(product)=>{
    return {
        type: "CHANGE_CART_QTY",
        payload: product
    }
}