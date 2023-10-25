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
   <h2>Carrito de compras</h2>
       
        
    

         <h3>Total: $ {cart.reduce((acumulador,item)=> {return acumulador + item.precio *item.quantity},0)}</h3>
            <h4> {cart.reduce((acumulador,item)=> {return acumulador + item.quantity},0)}
         <img src="\iconCart.png" width="40px"></img></h4>  
            <button className="buttonclear" onClick={clearCart}>Limpiar carrito</button>


       <div className="box">
        {
            cart.map((item, i)=> <CartItems key={i} item={item} deleteFromCart={deleteFromCart}/>)
        }
        </div>
       
 
   <h3>Productos</h3>
    <div className="boxproduct">
    {
        products.map((product) => <Product key={product.id} product={product} addToCart ={addToCart}/>)
    }

   </div>
        <style jsx> {` h4{background-color: #EAEAEA;
                        width:45px;
                        margin: 30px;
                        padding: 3px;
                        border-radius: 5px}`}

        </style>
   </>
  )
}   

export default ShoppingCart

 
        
    
   