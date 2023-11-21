
import ButtonProd from "@/atoms/Boton-VerProd"

const GrayCard = () => {
  return (
    <>
    <figure>
         
         <figcaption>
            <h1 id="ficcion">Ficción</h1>
           
         </figcaption>
         <ButtonProd />
       </figure>
       <style jsx >{`
              figure {
                height: 160px;
                width: 210px;
                padding:10px;
                display: flex;
                flex-direction: column;
                text-transform: uppercase;
                margin-left:  80px }   
            h1{
              text-align:center;
              color: #6e6e6e;
            }

            @media only screen and (max-width: 36.25rem) {
              figure { margin-left:0}
       `}</style>
    </>
  )
}

export default GrayCard