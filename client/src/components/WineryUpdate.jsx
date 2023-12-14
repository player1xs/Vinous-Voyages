import { useMemo, useEffect, useState } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import countryList from 'react-select-country-list'
import ImageUploadField from './ImageUploadField'
import Container from 'react-bootstrap/esm/Container'

export default function WineryUpdate() {

  const options = useMemo(() => countryList().getData(), [])
  const res = useActionData()
  const navigate = useNavigate()
  const winery = useLoaderData()

  useEffect(() => {
    console.log(res)
    if (res?.status === 202) {
      console.log('UPDATED SUCCESSFULLY')
      navigate(`/wineryIndex/${res.data._id}`)
    }
  }, [res, navigate])

  const [ image, setImage ] = useState(winery.image)

  return (
    <>
      <h1 className="winery-create text-center bold display-3 mb-4">Update Winery</h1>
      <Container fluid className="create-container overflow-auto">
        <Form className="form" method="PUT">
          <div className="create-name">
            <label hidden htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="Name" defaultValue={winery.name}/>
          </div>
          <div className="create-location">
            <input list="countries" name="country" placeholder="Country" defaultValue={winery.country}/>
            <datalist id="countries">
            {options.map(country => {
              return <option key={country.label} value={country.label}></option>
            })}
            </datalist>
            <label hidden htmlFor="region">Region</label>
            <input type="text" name="region" placeholder="Region" defaultValue={winery.name}/>
            <label hidden htmlFor="appelation">Appelation</label>
            <input type="text" name="appelation" placeholder="Appelation" defaultValue={winery.appelation}/>
          </div>
          <div className="create-product">
            <label hidden htmlFor="varietalsGrown">Varietals grown</label>
            <input type="text" name="varietalsGrown" placeholder="Varietals grown (separate by comma)" defaultValue={winery.varietalsGrown}/>
            <label hidden htmlFor="range">Range</label>
            <input type="text" name="range" placeholder="Product range (separate by comma)" defaultValue={winery.range}/>
          </div>
          <div className="create-contact">
            <label hidden htmlFor="website">Website</label>
            <input type="text" name="website" placeholder="Website URL" defaultValue={winery.website}/>
            <label hidden htmlFor="phone">Phone number</label>
            <input type="text" name="phone" placeholder="Phone number" defaultValue={winery.phone}/>
            <label hidden htmlFor="address">Address</label>
            <input type="text" name="address" placeholder="Address" defaultValue={winery.address}/>
          </div>
          <div className="create-location">
            <label hidden htmlFor="latitude">Geocode latitude</label>
            <input type="number" step="any" name="latitude" placeholder="Geocode latitude" defaultValue={winery.latitude}/>
            <label hidden htmlFor="longitude">Geocode longitude</label>
            <input type="number" step="any" name="longitude" placeholder="Geocode longitude" defaultValue={winery.longitude}/>
          </div>
          <div className="create-about">
            <div className="create-city">
              <label hidden htmlFor="nearbyCity">Nearby City</label>
              <input type="text" name="nearbyCity" placeholder="Nearest city/Airport" defaultValue={winery.nearbyCity}/>
              <label hidden htmlFor="attractions">Local Attractions</label>
              <input type="text" name="attractions" placeholder="Local attractions" defaultValue={winery.attractions}/>
            </div>
            <div className="about-div">
              <label hidden htmlFor="about">About</label>
              <textarea className="text-for-about" name="about" placeholder="About..." defaultValue={winery.about}/>
            </div>
            <div className="create-image">
              <ImageUploadField image={image} setImage={setImage} />
            </div>
          </div>

          <div className="create-Btn-container">
            {/* Add message on server side to inform  visitor is unauthorised or other errors?*/}
            {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
            <button className="createBtn" type="submit" name="intent" value="update">Update Winery</button>
          </div>
        </Form>
        <Form className="form" method="DELETE">
          <button className="createBtn" type="submit" name="intent" value="delete">Delete Winery</button>
        </Form>
      </Container>
    </>
  )
}