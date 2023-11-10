
import Header from "@/molecules/Header"
import ShoppingCart from "@/organisms/ShoppingCart"



import VideoText from "@/organisms/VideoText"
import CarouselBooks from "@/organisms/CarouselBooks"
import 'bootstrap/dist/css/bootstrap.min.css'
import CardscontainerInfo from "@/organisms/CardscontainerInfo"


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
