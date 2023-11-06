
  

const Product = ({product,  addToCart }) => {

  

const { id, nombre, precio ,  } = product;




  return (
    <>    
    <div className="product">
        <h4>{nombre}</h4>
        <h5>${precio}</h5>
        <button onClick={()=>addToCart(id)}>Comprar</button>
    </div>

   
    </>
  )
}

export default Product