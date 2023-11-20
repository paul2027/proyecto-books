
import ButtonProd from "@/atoms/Boton-VerProd";

const WhiteCard = () => {
  return (
    <>
      <figure>
        <figcaption>
          <h1>Clásicos</h1>
        </figcaption>
        <ButtonProd />
      </figure>
      <style jsx>{`
        figure {
          height: 160px;
          width: 210px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          text-transform: uppercase;
          margin-left:  20px
         
        }
        h1 {
          text-align: center;
          color: #6e6e6e;
        }

        @media only screen and (max-width: 36.25rem) {
          figure { margin-left:0rem;
         margin-top:2rem;
    
          
                 position:absolute;
                top:107rem}
      `}</style>
    </>
  );
};

export default WhiteCard;
