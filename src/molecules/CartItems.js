
import { cartInitialState } from "@/reducer/cartInitialState";
import { cartReducer } from "@/reducer/cartReducer";

const CartItems = ({item, deleteFromCart}) => {

    const {id, nombre , precio , quantity} = item;



  return (
    <div className="cart-item">
        <h4>{nombre}</h4>
        <h5>{precio} x {quantity} = { precio * quantity}</h5>
        <button onClick={() => deleteFromCart(id)}>Eliminar uno</button>
        <button onClick={() => deleteFromCart(id)}>Eliminar todos</button>
    </div>
  )
}

export default CartItems