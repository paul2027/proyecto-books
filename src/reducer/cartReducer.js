
import { TYPES } from "@/actions/actions";
import { cartInitialState } from "./cartInitialState";

export const cartReducer =( state, action) => {
        switch (action.type) {

            case TYPES.ADD_TO_CART: {
                const newItem = state.products.find(products => products.id===action.payload);
                return {...state, 
                    cart:[...state.cart , newItem]}
            }


            case TYPES.REMOVE_ALL_PRODUCT: {}
            case TYPES.REMOVE_ONE_PRODUCT: {}
            case TYPES.CLEAR_CART: {return cartInitialState}

            default:
                return state
        }
}