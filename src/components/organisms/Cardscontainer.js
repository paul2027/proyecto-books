import Cards from "@/components/molecules/Cards"


const Cardscontainer = () => {
    const infocliente = [
      {
        id:1,
        img: "https://cdn.icon-icons.com/icons2/2785/PNG/512/shipping_icon_177395.png",
        title:"Envio gratis",
        text:"en compras de $16.000 o mas.",
      },
      {
        id:2,
        img:"https://cdn.icon-icons.com/icons2/2785/PNG/512/discount_icon_177364.png",
        title:"Descuento",
        text:"10% off en efectivo o transeferencia.",
      },
      {
        id:3,
        img:"https://cdn.icon-icons.com/icons2/2785/PNG/512/customer_service_icon_177385.png",
        title:"Contactanos ",
        text:"ante cualquier duda.",
      },
    ]

  return (
    <>
    <div>
        {
            infocliente.map((infocliente, index) => (<Cards key={infocliente.id} infocliente={infocliente}/>
        ))}


    
    </div>

    <style jsx>{`
    div{
        display: flex;
        flex wrap: wrap; 
        background-color: #EAEAEA;
        height:150px;
        width: 100vw;
        overflow-x: hidden;
        
        
        
        
    }
    
    `}</style>



    </>
  )
}

export default Cardscontainer