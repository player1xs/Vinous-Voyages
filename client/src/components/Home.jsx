import { Link } from 'react-router-dom'
import Container from "react-bootstrap/esm/Container.js";
import HeroSlider from "./HeroSlider.jsx";
import MapContainer from "./Mapbox.jsx";


export default function Home() {


  return (
    <>
      <Container fluid className='homepage overflow-auto'>
        <HeroSlider />
        <div className="welcome-text">
          <p className="about-top">Venture into the Vivid world of Vintage Vineyards with our Vibrant wine travel site! Embark on a Voyage that will whisk you away to Various Valleys, Vineyards, and Villages, offering a Vast Vista of Vinicultural wonders. Immerse yourself in the Velvety allure of sprawling Vineyards, where Vines gracefully entwine, and the Very essence of Viticulture unfolds before your Very eyes.<br /><br />
          Our Visionary platform invites you to explore a Variety of Vinous destinations, from the Vine-laden Valleys of France to the Volcanic soils of Italy. Imbibe the spirit of Vineyard exploration, and let the passion for wine take you on a Voyage of Viniferious Ventures. 
          </p>
        </div>
        <div className="mapbox">
          <MapContainer />
          <div className="below-text">
            <Link to='/wineryIndex' className='idx-btn'>Press here to View our Venerable centres of Vinification</Link>
            <p className="map-text"> Or use this map to Vivaciously peruse master Vintners and Vicariously Visualise future Visitations</p>
          </div>
        </div>
      </Container>
    </>
  )
}