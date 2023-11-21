



const BasicCard = ({data, addToCart}) => {

  const {img, title, price,id,autor} = data;
 
 
 
  return (

   <>
       <figure>
         <img src={img} alt={title}  />
         <figcaption>
            <h3>{title}</h3>
            <p>{autor}</p>
            <p>${price}</p>
            <button  onClick={()=>addToCart(id)} >Comprar</button>
         </figcaption>
       </figure>


       <style jsx >{`
              figure {
              height: 320px;
              width: 220px;
              border: 0.1px solid black;
              border-radius: 10px;
              background-color: white;
              box-shadow: 3px 6px 20px;
              padding:10px;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: 60px;
              margin-right: 20px;
                
              margin-top: 20px;
              margin-bottom: 20px;
          
              
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
            @media only screen and (max-width: 36.25rem) {figure {
              height: 350px;
              width: 240px;
              border: 0.1px solid black;
              border-radius: 10px;
              background-color: white;
              box-shadow: 3px 6px 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-bottom: 10rem;
              margin-left: 0.0rem
             
           
          


            }

       `}</style>
   </>
  )
}

export default BasicCard

