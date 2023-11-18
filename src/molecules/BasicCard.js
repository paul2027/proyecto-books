

import Button from "@/atoms/Boton-Comprar";


const BasicCard = ({data}) => {

  const {img, title, price} = data;
 
 
 
  return (
   <>
       <figure>
         <img src={img} alt={title}  />
         <figcaption>
            <h3>{title}</h3>
            <p>{price}</p>
            <Button />
         </figcaption>
       </figure>


       <style jsx >{`
              figure {
              height: 290px;
              width: 210px;
              border: 0.1px solid black;
              border-radius: 10px;
              background-color: white;
              box-shadow: 3px 6px 20px;
              padding:10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              
            }
            img {
              width: 60%;
              object-fit: cover; 
              justify-content: center;
              margin-left: 4px;   
              margin-top: 9px;
              display: flex;
              flex-direction: column;
              align-items: center;
              
            }
            h3 {
              font-size: 1rem;
              line-height:0.;
              text-align: center;
              padding-top: 0.3rem;
            }
            p {
              line-height:0; 
              font-size: .8rem;
              text-align: center;
        
            
            }
            button {
              justify-content:center;
              align-items: center;
              display: inline-block;
              
            }

           
       `}</style>
   </>
  )
}

export default BasicCard

