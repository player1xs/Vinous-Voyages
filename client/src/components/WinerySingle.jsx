import { useLoaderData, Link, Form } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import { activeUser } from '../utils/helpers/common'

import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import '../styles/components/Mapbox.scss'
import 'leaflet/dist/leaflet.css'

export default function WinerySingle() {

const winery = useLoaderData()
const { name, about, region, appelation, varietalsGrown, image, range, website, phone, nearbyCity, attractions, address, latitude, longitude, _id, reviews} = winery

const customIcon = new Icon({
  iconUrl: "https://icons.veryicon.com/png/o/clothes-accessories/platinum-knight-travel-shot-monochrome-icon/wine-glass-46.png",
  iconSize: [38, 38]
})

  return (
    <>
      {activeUser() === winery.owner._id &&
        <div>
          <button className="update-delete"><Link to={`/wineryIndex/${_id}/update`}>Update / Delete</Link></button>
        </div>
      }
      <div className="sglHeader">
        <Link to={`/wineryIndex`} className="backBtn">Back</Link>
      </div>

      <Container fluid className='single-winery-container overflow-auto'>
        <div className="WineryInfo">
          <div className="img-container">
            <img className="imgDr"src={ image }/>
          </div>
          <div className="text">
            <h1 className="title-on-single">{ name }</h1>
            <p className="region"><span className="text-header">Region: </span>{ region }</p>
            <p className="appelation"><span className="text-header">Appelation: </span>{ appelation }</p>
            <ul className="range"> <span className="text-header">Range: </span>
              {range.map((item, idx) => {
                return <li key={idx}>{item}</li>
                })}
            </ul>
            <ul className="varietals"> <span className="text-header">Varietals planted: <br /></span>
              {varietalsGrown.map((item, idx) => {
                return <li key={idx}>{item}, </li>
              })}
            </ul>
          </div>
        </div>

        <div className="about-section">
          <p className="about"><span className="about-header">About: {name} </span><br />{ about }</p>
        </div>

        <div className="location-section">
          <div className="location-text-container">
            <a className="direct-link" href={website}><span className="text-header">Website: </span>{name} </a>
            <p><span className="text-header">Phone: </span>+{phone} </p>
            <p><span className="text-header">Address: </span>{address} </p>
            <p><span className="text-header">Nearby City/ Airport: </span>{nearbyCity} </p>
            <p><span className="text-header">Local Attractions: </span>{attractions} </p>
          </div>
          <div className="single-map">
            <MapContainer center={[latitude, longitude]} zoom={16}>
          
              <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              />
              <Marker position={[latitude, longitude]} icon={customIcon}></Marker>
            </MapContainer>
          </div>
        </div>
          <div className="review-container">
            <Form className="review-form" method="POST">
              <div className="review-title">
                Leave a review<br></br>
              </div>
            <label htmlFor="rating">Score:</label>
            <input type="text" name="rating" className="rating-box" placeholder="1-100"/>
            <label hidden htmlFor="text">Review Description</label>
            <textarea className="review-text-box"name="text" placeholder="Review description..." />
            <button type="submit" name="intent" value="create">Post Review</button>
            </Form>
            {reviews.map(review => {
              const { _id, rating, text, owner } = review
              return (
                <div key={_id} className="review">
                  <p>{rating}</p>
                  <p>{text}</p>
                  <p>{owner.username}</p>
                  {activeUser() === owner._id && <button className="delete" name="intent" value="delete">Delete</button>}
                </div>
              )
            })}
          </div>
      </Container>
    </>
  )
}