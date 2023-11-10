import useMediaQuery from "@/hooks/useMediaQuery"
import { roboto_Mono } from "@/pages/_app"
import Image from "next/image"
import Link from "next/link"
import SideBar from "./SideBar"
import { useState } from "react"
const Header = () => {
const ismobile=useMediaQuery(770)
const [isSideBarOpen,setIsSideBarOpen]=useState(false)
const closeSideBar=()=>{
  setIsSideBarOpen(false)
}
  return (
    <>
    {isSideBarOpen &&(
      <SideBar onClose={closeSideBar}/>

    )}

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
          <div onClick={()=>setIsSideBarOpen(true)}>
          <Image
          src="/hamburguesa_verde.png"
          width={50}
          height={33}
          alt="Logo Books"
          />
          </div>
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
      <div>
       <Image
       src="/iconos.png"
       width={103}
       height={54}
       alt="Logo Books"
       />
       <Image
       src="/carrito.b.png"
       width={52}
       height={52}
       alt="Logo Books"
       className="carritOscuro"
       />
       </div>
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