import { ADD_PRODUCT, SELECTED_PRODUCT, UPDATE_PRODUCT } from "./constant"
import { DELETE_PRODUCT } from "./constant"
const initState = {
    products:[
    {
        id: "P001",
        name: "Pizza",
        image: "images/pizza.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 12,
        quantity: 10,
    },
    {
        id: "P002",
        name: "Hamburger",
        image: "images/Hamburger.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 16,
        quantity: 0,
    },
    {
        id: "P003",
        name: "Bread",
        image: "images/bread.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 13,
        quantity: 8,
    },
    {
        id: "P004",
        name: "Cake",
        image: "images/Cake.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
        price: 14,
        quantity: 6,
    },
]};
const productReducer = (state = initState, action) => {
switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product.id != action.payload)
            };
        case SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload
            };
        case UPDATE_PRODUCT:
            return {
                ...state,
                products: state.products.map(product => product.id === action.payload.id ? action.payload : product),
                selectedProduct: null
            };
        default:
            return state;
    }
}
export default productReducer