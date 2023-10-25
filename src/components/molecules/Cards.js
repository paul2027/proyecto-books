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
            
          }
          img {
            max-width: 60%;
            height: 60%;
            margin: 0px 50px 0px 0px;
          }

          h3 {
            margin: 20px 0px 0px 0px;
            line-height:10px;
            color: #A7A7A7;
          }

          p {
            display: flex;
            flex-direcion: column;
            color: #A7A7A7;
          }
        `}
      </style>
    </>
  );
};

export default Cards;
