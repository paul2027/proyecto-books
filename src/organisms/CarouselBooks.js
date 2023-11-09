import React from 'react'
import { Carousel } from 'react-bootstrap'


const CarouselBooks = () => {
  return (
    <>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <div className='contenedor'>
         <img
        className="d-block w-100" 
        src="https://images.cdn3.buscalibre.com/fit-in/360x360/e9/5f/e95fc48fb61be87d0330ef997a201e27.jpg"
        alt="El retrato de Dorian Grey"
      />
      
      <Carousel.Caption>
        <h5>El retrato de Dorian Grey</h5>
        <p>Autor: Oscar While</p>
      </Carousel.Caption>
    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className='contenedor'>
      <img
        className="d-block w-100"
        src="https://tienda.planetadelibros.com.ar/cdn/shop/products/portada_la-metamorfosis__202101071915_720x.jpg?v=1684351442"
        alt="La Metamorfosis"
      />
      <Carousel.Caption>
        <h5>La Metamorfosis</h5>
        <p>Autor: Franz Kafka</p>
      </Carousel.Caption>
    </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className='contenedor'>
      <img
        className="d-block w-100"
        src="https://images.cdn1.buscalibre.com/fit-in/360x360/07/c8/07c8ab4dfef3c9dcd62c9685707492b3.jpg"
        alt="Las Aventuras de Sherlock Holmes"
      />
      <Carousel.Caption>
        <h5>Las Aventuras de Sherlock Holmes</h5>
        <p>
        Autor: Arthur Conan Doyle
        </p>
      </Carousel.Caption>
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div className='contenedor'>
      <img
        className="d-block w-100"
        src="https://images.cdn1.buscalibre.com/fit-in/360x360/42/7f/427f18ddc9cb21b5d943a63517df875a.jpg"
        alt="Alicia en el país de las Maravillas"
      />
      <Carousel.Caption>
        <h5>Alicia en el país de las Maravillas</h5>
        <p>Autor: Lewis Carroll</p>
      </Carousel.Caption>
    </div>
    </Carousel.Item>


    <Carousel.Item>
    <div className='contenedor'>
      <img
        className="d-block w-100"
        src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623078210-la-naranja-mecanica-anthony-burgess-201505261226.jpg?crop=1xw:1xh;center,top&resize=980:*"
        alt="Alicia en el país de las Maravillas"
      />
      <Carousel.Caption>
        <h5>La Naranja Mecánica</h5>
        <p>Autor: Anthony Burgess</p>
      </Carousel.Caption>
    </div>
    </Carousel.Item>


  </Carousel>
  </>
  )
}

export default CarouselBooks
