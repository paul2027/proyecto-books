import { roboto_Mono } from "@/pages/_app"
import Image from "next/image"


const Header = () => {



  return (
    <>
   <div className={`${roboto_Mono.className} barra-promo`}>
    3 CUOTAS SIN INTERÉS + FREE DELIVERY EN COMPRAS MAYORES A $16.999.-
    </div>
    <div className="Navbar">
    <Image
      src="/logo.png"
      width={300}
      height={81}
      alt="Logo Books"
      />
 <div className="Buscador">
    <input className="Barrabusqueda"/>
    <Image
      src="/lupa.png"
      width={20}
      height={20}
      alt="Logo Books"
      />
    </div>
    <Image
      src="/iconos.png"
      width={200}
      height={54}
      alt="Logo Books"
      />
    </div>
   
    

    </>
  )
}

export default Header