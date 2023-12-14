/* eslint-disable react/jsx-key */
import { Icon } from 'leaflet'
// import { divIcon, point } from 'leaflet'
import '../styles/components/Mapbox.scss'
import 'leaflet/dist/leaflet.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useLoaderData } from 'react-router'
import { Link } from 'react-router-dom'
// import MarkerClusterGroup from 'react-leaflet-cluster'



export default function Mapbox() {

  const markers = useLoaderData()
  
  const customIcon = new Icon({
    iconUrl: "https://icons.veryicon.com/png/o/clothes-accessories/platinum-knight-travel-shot-monochrome-icon/wine-glass-46.png",
    iconSize: [38, 38]
  })

  // const createCustomClusterIcon = (cluster) => {
  //   return new divIcon({
  //     html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
  //     className: "custom-marker-cluster",
  //     iconSize: point(33, 33, true)
  //   })
  // }


  return (
    <MapContainer center={[-0.050635, 1.479107]} zoom={1}>
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <MarkerClusterGroup */}
        {/* chunkedLoading
        iconCreateFunction={createCustomClusterIcon} */}
      {/* > */}

      {markers.map(marker => (
        <Marker position={[marker.latitude, marker.longitude]} key={marker._id} icon={customIcon}>
          <Popup>
            <div className="popUp">
              <img className="popUp-img" src={marker.image} height="75px"/>
              <Link to ={`/wineryIndex/${marker._id}`}>{marker.name}, {marker.country}</Link>
            </div>
          </Popup>
        </Marker>
      ))}
      {/* </MarkerClusterGroup> */}
    </MapContainer>
  )
}