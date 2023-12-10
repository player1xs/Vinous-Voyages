// /* eslint-disable react/jsx-key */
// import '../styles/components/Mapbox.scss'
// import 'leaflet/dist/leaflet.css'

// import { MapContainer, TileLayer, Marker } from 'react-leaflet'
// import { useLoaderData } from 'react-router'



// export default function Mapbox() {

//   const markers = useLoaderData()


//   return (
//     <MapContainer center={[48.8566, 2.3522]} zoom={2}>
//       <TileLayer 
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//       />
//       {markers.map(marker => (
//         // <Marker position={marker.geocode}>
          
//         // </Marker>
//         console.log(marker.geocode)
//       ))
//       }
//     </MapContainer>
//   )
// }

//look into deconstructing first