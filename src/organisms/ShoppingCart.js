import { TYPES } from "@/actions/actions" 
import { useReducer } from "react"
import { cartInitialState } from "@/reducer/cartInitialState"
import { cartReducer } from "@/reducer/cartReducer"
import Product from "@/molecules/Product"
import CartItems from "@/molecules/CartItems"



const ShoppingCart = () => {

        const [state, dispatch] = useReducer(cartReducer, cartInitialState, )

        const {products, cart} = state;

        const addToCart = (id) => dispatch ({type: TYPES.ADD_TO_CART , payload:id}) 

        const deleteFromCart = (id , all = false) => {
        if (all) {
            
            dispatch ({type: TYPES.REMOVE_ALL_PRODUCTS, payload:id})
            
        } else { 
            dispatch ({type: TYPES.REMOVE_ONE_PRODUCT, payload:id})
            
        }
        
    }

        const clearCart = () => dispatch ({type: TYPES.CLEAR_CART})



  return (
   <>
   <h2>Carrito de compras</h2>
   <h3>Productos</h3>

   <div className="boxproduct">
    {
        products.map((product) => <Product key={product.id} product={product} addToCart ={addToCart}/>)
    }

   </div>

    <h3>Carrito</h3>
    <div className="box">
        {
            cart.map((item, i)=> <CartItems key={i} item={item} deleteFromCart={deleteFromCart}/>)
        }
    </div>

    <button onClick={clearCart}>Limpiar carrito</button>
   </>
  )
}

export default ShoppingCart