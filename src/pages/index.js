
import Header from "@/molecules/Header"
import VideoText from "@/organisms/VideoText"
import CarouselBooks from "@/organisms/CarouselBooks"
import 'bootstrap/dist/css/bootstrap.min.css'
import CardscontainerInfo from "@/organisms/CardscontainerInfo"
import Footer from "@/molecules/Footer"
import ContainerBestSeller from "@/organisms/ContainerBestSeller"
import ContainerFiccion from "@/organisms/ContainerFiccion"
import ContainerClasicos from "@/organisms/ContainerClasicos"
import ShoppingCart from "@/organisms/ShoppingCart"


const index = () => {
  return (
    <>
    <div> 
      <Header/>
      <VideoText/>
      <CardscontainerInfo/>
      <ContainerBestSeller/>
      <ShoppingCart/>
      <CarouselBooks/>
      <Footer/>
   

    

    </div>
    </>
  )
}

export default index
