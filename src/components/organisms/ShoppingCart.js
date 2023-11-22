
import { TYPES } from "@/actions/actions" 
import { useReducer, useEffect } from "react"
import { cartInitialState } from "@/reducer/cartInitialState"
import { cartReducer } from "@/reducer/cartReducer"
import CartItems from "@/components/molecules/CartItems"
import Card from "@/components/molecules/BasicCard"
import GrayCard from "@/components/molecules/GrayCard"
import WhiteCard from "@/components/molecules/WhiteCard"
import axios from "axios"



const ShoppingCart = () => {



        const [state, dispatch] = useReducer(cartReducer, cartInitialState, )

        const {products, cart} = state;

     const upDateState = async  () => {


                             const productsURL = " http://localhost:3010/products" ;
                             const cartURL = "http://localhost:3010/cart"  ;

                            const resProducts = await axios.get (productsURL);
                            const resCart = await axios.get (cartURL);

                            const productList = await resProducts.data
                             const carritoItems = await resCart.data

                        

                            dispatch ({type: TYPES.READ_STATE, payload:[productList, carritoItems] })
                          }
                          

                          useEffect(() => {
                           upDateState()
                          }, [])


        const addToCart = (id) => dispatch ({type: TYPES.ADD_TO_CART , payload:id}) 

        const deleteFromCart = (id, all) => {
          
          if (all) {
            dispatch ({type: TYPES.REMOVE_ALL_PRODUCTS, payload:id})
          } else {
            dispatch ({type: TYPES.REMOVE_ONE_PRODUCT, payload:id})
          }
        }
          

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
                          <h3 >Total carrito: $ {cart.reduce((acumulador,item)=> {return acumulador + item.price * item.quantity},0)}</h3>
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

    
      
        <div className="cardContainer1">
        <GrayCard />
        {products.map((product) => (
          <Card key={products.id} data={product } addToCart={addToCart} />
        ))}
        <WhiteCard />
        </div>
        

      

            
         </>
  )
}

export default ShoppingCart