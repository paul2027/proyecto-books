import { TYPES } from "@/actions/actions" 
import { useReducer } from "react"
import { cartInitialState } from "@/reducer/cartInitialState"
import { cartReducer } from "@/reducer/cartReducer"
import Product from "@/components/molecules/Product"
import CartItems from "@/components/molecules/CartItems"




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
       
   <p className="cartAcumulador"> {cart.reduce((acumulador,item)=> {return acumulador + item.quantity},0)}</p>      
   <input type="checkbox" id="spoiler2"></input>

   
     <label for="spoiler2" ><img className="iconCart" src="\iconCart.png" width="40px"></img></label>
        <div class="spoiler">   
            <h3>Total: $ {cart.reduce((acumulador,item)=> {return acumulador + item.precio *item.quantity},0)}</h3>
             
            <button className="buttonclear" onClick={clearCart}>Limpiar carrito</button>  
            <div className="itemCartContainer">
            {
            cart.map((item, i)=> <CartItems key={i} item={item} deleteFromCart={deleteFromCart}/>)
             }
            </div> 
         </div>


 
   </>
  )
}   

export default ShoppingCart

 
        
    
   