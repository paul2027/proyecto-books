
import ButtonProd from "@/atoms/Boton-VerProd"

const GrayCard = () => {
  return (
    <>
    <figure>
         
         <figcaption>
            <h1>Ficción</h1>
           
         </figcaption>
         <ButtonProd />
       </figure>
       <style jsx >{`
              figure {
              height: 290px;
              width: 210px;
              background-color: #f7f7f7;
              padding:10px;
              display: flex;
              flex-direction: column;
              text-transform: uppercase;
              
            }   
            h1{
              text-align:center;
              color: #6e6e6e;
            }
       `}</style>
    </>
  )
}

export default GrayCard