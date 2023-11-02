






const BestSellCard = ({data}) => {

    const {id,img, title, price} = data;

  return (

   <>
       <figure>
         <img src={img} alt={title}  />
         <figcaption>
            <h3> # {id}</h3>
            <h3>{title}</h3>
            <p>{price}</p>
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
              margin-left: 38px;   
              margin-top: 10px
            }

            h3 {
              font-size: 1rem;
              line-height:0.1;
              text-align: center;
              margin-top: 1.5rem;
              margin-bottom: 1rem;
              color:  #154242;
            }
            p {
              line-height:0.4; 
              font-size: .8rem;
              text-align: center;
              width: 100%; 
              padding-bottom: 1rem;
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

export default BestSellCard