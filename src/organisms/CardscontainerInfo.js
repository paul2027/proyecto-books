import CardsInfo from "@/molecules/CardsInfo" 


const CardscontainerInfo = () => {
    const infocliente = [
      {
        id:1,
        img: "https://cdn.icon-icons.com/icons2/2785/PNG/512/shipping_icon_177395.png",
        title:"Envío gratis",
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
    <div className="cards-container-info">
        {
            infocliente.map((infocliente, index) => (<CardsInfo key={infocliente.id} infocliente={infocliente}/>
        ))}

    
    </div>

    <style jsx>{`
    
    .cards-container-info {
      display: grid;
      grid-template-columns: repeat(3, 1fr); 
      gap: 10px; 
      background-color: #eaeaea;
      height: auto;
      width: 99vw;
      overflow-x: hidden;
      justify-content: center;
      padding: 10px; 
    }

    

    @media (max-width: 767px) {
      .cards-container-info {
        grid-template-columns: 3fr;
        align-items: right;

      }
      .cards-container-info .card {
        width: calc(100% - 20px);
        margin: 10px;
      }

      .cards-container-info .card img {
        width: 20%;
        height: auto;
      }

    

    }
    
    `}</style>


    </>

  )
}

export default CardscontainerInfo