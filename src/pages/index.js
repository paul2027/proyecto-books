
import Header from "@/molecules/Header"
import VideoText from "@/organisms/VideoText"
import CarouselBooks from "@/organisms/CarouselBooks"
import 'bootstrap/dist/css/bootstrap.min.css'
import CardscontainerInfo from "@/organisms/CardscontainerInfo"
import ShoppingCart from "@/components/organisms/ShoppingCart"


const index = () => {
  return (
    <>
    <div> 
      <Header/>
      <VideoText/>
      <CardscontainerInfo/>
      <br></br>
      <CarouselBooks/>
      <ShoppingCart/>
      
    </div>
    </>
  )
}

export default index
