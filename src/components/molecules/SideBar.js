import useMediaQuery from "@/hooks/useMediaQuery"
import { roboto_Mono } from "@/pages/_app"
import Image from "next/image"
import Link from "next/link"


const SideBar = ({onClose}) => {
const ismobile=useMediaQuery(770)

  return (
  <div className="SideBar">
    <Image
    className="imagenLogoSideBar"
      src="/logoWhite.png"
      width={250}
      height={81}
      alt="Logo Books"
      />
  <div className="MenuHambuerguesaSideBar" onClick={()=>onClose()}> 
     <Image
          src="/hamburguesa.png"
          width={50}
          height={33}
          alt="Logo Books"
          />
          </div>
       <div className="SideBarMenu">
      <Link className="link-menu" href="#categorias">CATEGORÍAS</Link>
      <Link className="link-menu" href="#best-seller">BEST SELLER</Link>
      <Link className="link-menu" href="#ficcion">FICCIÓN</Link>
      <Link className="link-menu" href="#clasicos">CLÁSICOS</Link>
      <Link className="link-menu" href="#contacto">CONTACTO</Link>
  </div> 
  {/* Nuevo div con dos imágenes */}
  <div className="image-container">
        <Image
          src="/rrss.png"
          width={110}
          height={55}
          alt="Image RRSS"
        />
        <Image className="carritoSideBar"
          src="/carrito.png"
          width={45}
          height={55}
          alt="Image carrito"
        />
      </div>
  </div>
  )
}

export default SideBar