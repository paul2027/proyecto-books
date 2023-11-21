


const CartItems = ({item, deleteFromCart}) => {

    const {img,id,title, price , quantity} = item;



  return (
    <>

    
      <figure>
        
        <h4>{title}</h4>
        <p> {quantity} Unidad(es) : ${ price * quantity}  </p>
        <button onClick={() => deleteFromCart(id, false)}>Eliminar uno</button><br></br>
        <button onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
        </figure>

<style jsx>{` button {margin:10px;}

            figure { margin :10px;
            transition: 0.4s;
            background-color: white;
            text-align: center;
            border-radius: 10px;
            box-shadow: 3px 3px 1px grey
      }
      figure:hover { transform: scale(1.1)}
}
`}

</style>
    

    </>
  )
}

export default CartItems