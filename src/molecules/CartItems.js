
import { cartInitialState } from "@/reducer/cartInitialState";
import { cartReducer } from "@/reducer/cartReducer";

const CartItems = ({item, deleteFromCart}) => {

    const {id, nombre , precio , quantity} = item;



  return (
    <div className="cart-item">
        <h4>{nombre}</h4>
        <h3>{precio} x {quantity} = { precio * quantity}</h3>
        <button onClick={() => deleteFromCart(id, false)}>Eliminar uno</button>
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
  )
}

export default CartItems