
import { TYPES } from "@/actions/actions" 
import { useReducer } from "react"
import { cartInitialState } from "@/reducer/cartInitialState"
import { cartReducer } from "@/reducer/cartReducer"
import CartItems from "@/components/molecules/CartItems"
import Card from "@/molecules/BasicCard"
import GrayCard from "@/molecules/GrayCard"
import WhiteCard from "@/molecules/WhiteCard"
import ContainerFiccion from "./ContainerFiccion"
import ContainerClasicos from "./ContainerClasicos"


const ShoppingCart = () => {



        const [state, dispatch] = useReducer(cartReducer, cartInitialState, )

        const {Proplibros,Proplibros1, cart} = state;
     

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
        {Proplibros.map((Proplibros) => (
          <Card key={Proplibros.id} data={Proplibros } addToCart={addToCart} />
        ))}
        <WhiteCard />
        </div>
        

      

            
         </>
  )
}

export default ShoppingCart