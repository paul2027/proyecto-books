
import { cartInitialState } from "@/reducer/cartInitialState";

const CartItems = ({item, deleteFfromCart}) => {

    const {id, nombre , precio , quantity} = item;



  return (
    <div className="cart-item">
        <h4>{nombre}</h4>
        <h5>{precio} x {quantity} = { precio * quantity}</h5>
        <button onClick={() => deleteFfromCart(id)}>Eliminar uno</button>
        <button onClick={() => deleteFfromCart(id)}>Eliminar todos</button>
    </div>
  )
}

export default CartItems