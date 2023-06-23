import { ADD_PRODUCT, UPDATE_PRODUCT } from "./constant"
import { DELETE_PRODUCT } from "./constant"
import { SELECTED_PRODUCT } from "./constant"

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product
});
export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
});
export const selectedProduct = (product) => ({
    type: SELECTED_PRODUCT,
    payload: product
});
export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product
});