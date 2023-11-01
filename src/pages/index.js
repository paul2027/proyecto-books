import CartItems from "@/molecules/CartItems"
import Header from "@/molecules/Header"
import ShoppingCart from "@/organisms/ShoppingCart"



import Cardscontainer from "@/organisms/Cardscontainer"
import VideoText from "@/organisms/VideoText"
import CarouselBooks from "@/organisms/CarouselBooks"
import 'bootstrap/dist/css/bootstrap.min.css'
import ContainerBestSeller from "@/organisms/ContainerBestSeller"
import ContainerFiccion from "@/organisms/ContainerFiccion"


const index = () => {
  return (
    <>
    <div> 
      <Header/>
      <VideoText/>
      <Cardscontainer/>
      <ContainerBestSeller/>
      <ContainerFiccion />
      <br></br>
      <CarouselBooks/>
      <ShoppingCart/>
    </div>
    </>
  )
}

export default index
