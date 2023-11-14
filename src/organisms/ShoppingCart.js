
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

        const deleteFromCart = (id) => dispatch ({type: TYPES.REMOVE_ONE_PRODUCT, payload:id})

        const clearCart = () => dispatch ({type: TYPES.CLEAR_CART})



  
    return (
        <>
<div className="dropContainerGeneral">
    <div className="dropContainer">
              <h5 className="cartAcumulador"> {cart.reduce((acumulador,item)=> {return acumulador + item.quantity},0)}</h5>
          <div className="dropdown">
              
     
             <img className="cartImage" src="\carrito.b.png"></img>
     
              <div className="dropdown-content">
                
                     <div className="acumuladorContainer">
                          <h3 >Total carrito: $ {cart.reduce((acumulador,item)=> {return acumulador + item.precio *item.quantity},0)}</h3>
                     </div>
     
                     <div className="productContainer">
                         {cart.map((item, i)=>  <CartItems key={i} item={item} deleteFromCart={deleteFromCart}/> ) }
                     </div>
                     <div className="acumuladorContainer">
                     <button className="buttonclear" onClick={clearCart}>Limpiar carrito</button>
                     </div >
              </div>
            </div>
         </div>
    </div>
    
         <h3>Productos</h3>
              <div className="boxproduct">
     
              { products.map((product) => <Product key={product.id} product={product} addToCart ={addToCart}/>)}
     
              </div>
         </>
  )
}

export default ShoppingCart