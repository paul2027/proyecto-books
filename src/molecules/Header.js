import useMediaQuery from "@/hooks/useMediaQuery"
import { roboto_Mono } from "@/pages/_app"
import Image from "next/image"
import Link from "next/link"


const Header = () => {
const ismobile=useMediaQuery(770)


  return (
    <>
   <div className={`${roboto_Mono.className} barra-promo`}>
    3 CUOTAS SIN INTERÉS + FREE DELIVERY EN COMPRAS MAYORES A $16.999.-
    </div>
    <div className="Navbar">
    <Image
    className="imagenLogo"
      src="/logo.png"
      width={300}
      height={81}
      alt="Logo Books"
      />
      <div className="menuMobile">
        {ismobile &&(
          <Image
          src="/hamburguesa_verde.png"
          width={70}
          height={53}
          alt="Logo Books"
          />
        ) }
        <div className="Buscador">
    <input className="Barrabusqueda"/>
    <Image
      src="/lupa.png"
      width={20}
      height={20}
      alt="Logo Books"
      />
    </div>
      </div>
 
    {!ismobile && (
       <Image
       src="/iconos.png"
       width={200}
       height={54}
       alt="Logo Books"
       />
    )}
    </div>
    {!ismobile && (
      <div className="Menu">
      <Link className="link-menu" href="#categorias">CATEGORÍAS</Link>
      <Link className="link-menu" href="#best-seller">BEST SELLER</Link>
      <Link className="link-menu" href="#ficcion">FICCIÓN</Link>
      <Link className="link-menu" href="#clasicos">CLÁSICOS</Link>
      <Link className="link-menu" href="#contacto">CONTACTO</Link>
  </div>

    )}
    
   
    

    </>
  )
}

export default Header