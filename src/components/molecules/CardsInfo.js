const Cards = ({infocliente}) => {


      const {img, title, text} = infocliente;
  return (
    <>
         <>
      <figure className="cardsInfo">
        <img className="imagenInfo"src= {img} alt={title}/>
        <div>
          <figcaption>
            <h3> {title} </h3>
          </figcaption>
          <p>{text}</p>
        </div>
      </figure>

      <style jsx>
        {`
          .cardsInfo{
            
            border: none;
            display: flex;
            flex-direcion: row;
            justify-content: center; 
            align-items: center; 
            
          }
          .imagenInfo {
            max-width: 40%;
            height: 40%;
            margin: 0px 50px 0px 50px;
            align-self: center;
            
          }

          h3 {
            margin: 20px 0px 0px 0px;
            line-height:50px;
            color: #A7A7A7;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 2.5px;
            align-self: center; 
          
          }

          p {
            display: flex;
            flex-direcion: column;
            color: #A7A7A7;
            font-size: 13px;
            letter-spacing: 1px;
            text-align: center;
          }

          
          @media (max-width: 767px) {
            .imagenInfo{
              max-width: 20%;
              height: 20%;
              margin: 0px 70px 0px 20px;
              align-self: right;
              
            }
            h3 {
              margin: 20px 0px 0px 0px;
              
            
            }

            p {
              display: flex;
              text-align: left;
              line-height: 20px;

            }

          

        `}
      </style>
    </>


    </>
  );
};

export default Cards;
