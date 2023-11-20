


const CartItems = ({item, deleteFromCart}) => {

    const {id,title, price , quantity} = item;



  return (
    <>

    <div>
        <h4>{title}</h4>
        <p> {quantity} Unidad(es) : ${ price * quantity}  </p>
        <button onClick={() => deleteFromCart(id, false)}>Eliminar uno</button>
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
    </div>
    

    </>
  )
}

export default CartItems