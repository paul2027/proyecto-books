const Cards = ({infocliente}) => {


      const {img, title, text} = infocliente;
  return (
    <>
      <figure>
        <img src= {img} alt={title}/>
        <div>
          <figcaption>
            <h3> {title} </h3>
          </figcaption>
          <p>{text}</p>
        </div>
      </figure>

      <style jsx>
        {`
          figure {
            
            border: none;
            display: flex;
            flex-direcion: row;
            justify-content: center; 
            align-items: center; 
            
          }
          img {
            max-width: 60%;
            height: 60%;
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
        `}
      </style>
    </>
  );
};

export default Cards;
