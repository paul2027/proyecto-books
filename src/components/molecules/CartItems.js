
import { cartInitialState } from "@/reducer/cartInitialState";
import { cartReducer } from "@/reducer/cartReducer";

const CartItems = ({item, deleteFromCart}) => {

    const {id, nombre , precio , quantity} = item;



  return (
    <>
    <div className="productCart">
        <h4>{nombre}</h4>
        <p> {quantity} uds = { precio * quantity}</p>
        <button onClick={() => deleteFromCart(id, false)}>Eliminar uno</button>
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
    

    </>
  )
}

export default CartItems