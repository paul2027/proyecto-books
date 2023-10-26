import CartItems from "@/molecules/CartItems"
import Header from "@/molecules/Header"
import ShoppingCart from "@/organisms/ShoppingCart"



import Cardscontainer from "@/organisms/Cardscontainer"
import VideoText from "@/organisms/VideoText"
import CarouselBooks from "@/organisms/CarouselBooks"
import 'bootstrap/dist/css/bootstrap.min.css'


const index = () => {
  return (
    <div> 
      <Header/>
      <ShoppingCart/>
     

      <VideoText/>
      <Cardscontainer/>
      <CarouselBooks/>
      
    </div>
  )
}

export default index
