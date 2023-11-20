

const Button = () => {


  return (
    <>
      <button >Comprar</button>

      <style>{`
            button {
            width: 198px;  
            background-color: #49a1a5;
            color: white;
            border: none;
            border-radius: .3rem;
            box-shadow: 2px 2px 2px #3d4949;
            padding: 10px 20px;
            text-transform: uppercase;
            
        }
  
        button:hover {
            background-color: #5facad;
            color: white;
            border: none;
            border-radius: .3rem;
            box-shadow: 2px 2px 3px black;
        }
  
      `}</style>
    </>
  );
};

export default Button;
