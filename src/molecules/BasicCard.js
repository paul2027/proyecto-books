

import Button from "./Button"


const Card = ({data}) => {

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
              
            }
            img {
              width: 60%;
              object-fit: cover; 
              justify-content: center;
              margin-left: 43px;   
              margin-top: 9px
              
            }
            h3 {
              font-size: 1rem;
              line-height:0.1;
              text-align: center;
              padding-top: 0.1rem;
            }
            p {
              line-height:0.1; 
              font-size: .8rem;
              text-align: center;
              width: 100%; 
            }

          h5 {
              line-height:0; 
              font-size: .8rem;
              text-align: center;
              width: 90%;
          }
           
       `}</style>
   </>
  )
}

export default Card

