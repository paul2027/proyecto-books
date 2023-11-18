
import Card from "@/molecules/BasicCard";
import WhiteCard from "@/molecules/WhiteCard";

const Proplibros = [
  {
    id: 1,
    img: "https://images.cdn1.buscalibre.com/fit-in/360x360/b0/39/b039af065268818b7bd3b0e016f8db65.jpg",
    title: "1984",
    price: " George Orwell, 14.670$",
  },
  {
    id: 2,
    img: "https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/206/original/205240_portada_orgullo-y-prejuicio_jane-austen_201506271719.jpg",
    title: "Orgullo y Prejuicio",
    price: "Jane Austen, 16.130$",
  },
  {
    id: 3,
    img: "https://quelibroleo.com/images/libros/libro_1362370739.png",
    title: "Crimen y Castigo",
    price: " Fiódor Dostoyevski, 9.770$",
  },
];

const ContainerClasicos = () => {
  return (
    <>
      <div>
        <WhiteCard />

        {Proplibros.map((Proplibros) => (
          <Card key={Proplibros.id} data={Proplibros} />
        ))}
      </div>

      <style jsx>{`
        div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          background-color: white;
          height:400px;
          width: 100vw;
          align-items: center
        }
      `}</style>
    </>
  );
};

export default ContainerClasicos;
