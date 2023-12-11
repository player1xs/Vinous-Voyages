import { useMemo, useEffect } from 'react'
import { Form, useActionData, useLoaderData, useNavigate } from 'react-router-dom'
import countryList from 'react-select-country-list'

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

  return (
    <>
      <h1 className="text-center bold display-3 mb-4">Update Winery</h1>
      <Form className="form" method="PUT">
        <label hidden htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name" defaultValue={winery.name}/>
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
        <label hidden htmlFor="varietalsGrown">Varietals grown</label>
        <input type="text" name="varietalsGrown" placeholder="Varietals grown (separate by comma)" defaultValue={winery.varietalsGrown}/>
        <label hidden htmlFor="range">Range</label>
        <input type="text" name="range" placeholder="Product range (separate by comma)" defaultValue={winery.range}/>
        {/* <ImageUploadField/> */}
        <label hidden htmlFor="website">Website</label>
        <input type="text" name="website" placeholder="Website URL" defaultValue={winery.website}/>
        <label hidden htmlFor="phone">Phone number</label>
        <input type="text" name="phone" placeholder="Phone number" defaultValue={winery.phone}/>
        <label hidden htmlFor="address">Address</label>
        <input type="text" name="address" placeholder="Address" defaultValue={winery.address}/>
        <label hidden htmlFor="geocode">Geocode</label>
        <input type="text" name="geocode" placeholder="Geocode" defaultValue={winery.geocode}/>
        <label hidden htmlFor="nearbyCity">Nearby City</label>
        <input type="text" name="nearbyCity" placeholder="Nearest city/town" defaultValue={winery.nearbyCity}/>
        <label hidden htmlFor="attractions">Local Attractions</label>
        <input type="text" name="attractions" placeholder="Local attractions" defaultValue={winery.attractions}/>
        <label hidden htmlFor="about">About</label>
        <textarea name="about" placeholder="About..." defaultValue={winery.about}/>
        {/* Add message on server side to inform  visitor is unauthorised or other errors?*/}
        {/* {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>} */}
        <button type="submit">Update Winery</button>
      </Form>
    </>
  )
}