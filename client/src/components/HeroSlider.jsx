/* eslint-disable react/jsx-key */
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/components/HeroSlider.scss"

const images = [
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070041/riscal_lewz8z.jpg',
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070045/Antinori_qlyuvm.jpg',
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070041/Inglenook-website_fza20s.png',
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070041/shutterstock_2068913084_uqfle7.webp',
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070040/Domaine-de-la-romanee-conti-2000x1047_t92ssk.jpg',
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070040/chateauneuf_du_pape_1200x675_huzty1.jpg',
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070040/chat-pichon-baron-040_tu76hj.webp',
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070040/chateau-montelena_ymzcqr.jpg',
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070041/mosel-1098-1-2_w7qcmy.webp',
  'https://res.cloudinary.com/djgaevw62/image/upload/v1702070039/vineyard-5649128_1920-768x373_zdz3xl.jpg'
]

export default function HeroSlider() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample" src={URL} key={index} />
            <p className='text-about'>SOME BUTTON</p>
            
          </div>
        ))}
      </Carousel>
    </div>
  )
}