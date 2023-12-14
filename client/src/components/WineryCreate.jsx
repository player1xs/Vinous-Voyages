import { useMemo, useEffect } from 'react'
import { useActionData, useNavigate, Form } from 'react-router-dom'
// import ImageUploadField from './ImageUploadField.jsx'
import countryList from 'react-select-country-list'
import Container from 'react-bootstrap/esm/Container'

export default function WineryCreate() {

  const options = useMemo(() => countryList().getData(), [])
  const res = useActionData()
  const navigate = useNavigate()

  // const [formData, setFormData] = useState({
  //   name: '',
  //   country: '',
  //   region: '',
  //   appelation: '',
  //   varietalsGrown: [],
  //   range: [],
  //   image: '',
  //   phone: '',
  //   website: '',
  //   address: '',
  //   nearbyCity: '',
  //   attractions: []
  // })

  // function handleChange(e) {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  useEffect(() => {
    if (res?.status === 201) {
      console.log('CREATED SUCCESSFULLY')
      navigate(`/wineryIndex/${res.data._id}`)
    }
  }, [res, navigate])

  return (
    <>
      {/* <form onSubmit={e => e.preventDefault()}>
        <input type="text" name="name" placeholder='Name of Winery' onChange={handleChange} value={formData.name} /> */}
        {/* make country a dropdown with all options and link up same to filter */}
        {/* <input type="text" name="country" placeholder='Country - eng Name with capital letter e.g.: France' onChange={handleChange} value={formData.country} /> */}
        {/* <input list="countries" name="country" onChange={handleChange} value={formData.country} />
        <datalist id="countries">
          {options.map(country => {
            return <option key={country.label} value={country.label}></option>
          })}
        </datalist>

        <input type="text" name="region" placeholder='Region' onChange={handleChange} value={formData.region} />
        <input type="text" name="appelation" placeholder='Appelation' onChange={handleChange} value={formData.appelation} />
        <input type="text" name="varietalsGrown" placeholder='Varietals planted on site (separete by comma)' onChange={handleChange} value={formData.varietalsGrown} />
        <input type="text" name="range" placeholder='Product Range (separete by comma' onChange={handleChange} value={formData.range} />
        <ImageUploadField setFormData={setFormData} formData={formData} />
        <input type="text" name="website" placeholder='Website Url' onChange={handleChange} value={formData.website} />
        <input type="text" name="phone" placeholder='Phone Number - eg: 0044123456789' onChange={handleChange} value={formData.phone} />
        <input type="text" name="address" placeholder='Address' onChange={handleChange} value={formData.address} />
        <input type="text" name="geocode" placeholder='Geocode' onChange={handleChange} value={formData.geocode} />
        <input type="text" name="nearbyCity" placeholder='Nearest City/Town' onChange={handleChange} value={formData.nearbyCity} />
        <input type="text" name="attractions" placeholder='Local Attractions (separated by comma)' onChange={handleChange} value={formData.attractions} />
        <input type="text" name="about" placeholder='About...' onChange={handleChange} value={formData.about} />
        <input type="submit" value="Add Winery" /> */}
        {/* Add message on server side to inform  visitor to login if haven't*/}
        {/* {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>} */}
      {/* </form> */}
      <h1 className="winery-create text-center bold display-3 mb-4">Winery Info Form</h1>
      <Container fluid className="create-container overflow-auto">
        <Form className="form" method="POST">
          <div className="create-name">
            <label hidden htmlFor="name">Name</label>
            <input type="text" name="name" placeholder="* Winery Name" />
          </div>
          <div className="create-location">
            <input list="countries" name="country" placeholder="* Country"/>
            <datalist id="countries">
              {options.map(country => {
                return <option key={country.label} value={country.label}></option>
              })}
            </datalist>
            <label hidden htmlFor="region">Region</label>
            <input type="text" name="region" placeholder="* Region" />
            <label hidden htmlFor="appelation">Appelation</label>
            <input type="text" name="appelation" placeholder="Appelation" />
          </div>
          <div className="create-product">
            <label hidden htmlFor="varietalsGrown">Varietals grown</label>
            <input type="text" name="varietalsGrown" placeholder="Varietals grown (separate by comma)" />
            <label hidden htmlFor="range">Range</label>
            <input type="text" name="range" placeholder="Product range (separate by comma)" />
          </div>
          <div className="create-image">
            {/* <ImageUploadField/> */}
          </div>
          <div className="create-contact">
            <label hidden htmlFor="website">Website</label>
            <input type="text" name="website" placeholder="Website URL" />
            <label hidden htmlFor="phone">Phone number</label>
            <input type="text" name="phone" placeholder="Phone number" />
            <label hidden htmlFor="address">Address</label>
            <input type="text" name="address" placeholder="Address" />
          </div>
          <div className="create-geolocation">
            <label hidden htmlFor="latitude">Geocode latitude</label>
            <input type="number" step="any" name="latitude" placeholder="* Geocode latitude" />
            <label hidden htmlFor="longitude">Geocode longitude</label>
            <input type="number" step="any" name="longitude" placeholder="* Geocode longitude" />
          </div>
          <div className="create-about">
            <div className="create-city">
              <label hidden htmlFor="nearbyCity">Nearby City</label>
              <input type="text" name="nearbyCity" placeholder="Nearest City/Airport" />
              <label hidden htmlFor="attractions">Local Attractions</label>
              <input type="text" name="attractions" placeholder="Local attractions" />
            </div>
            <div className="about-div">
              <label hidden htmlFor="about">About</label>
              <textarea className="text-for-about" name="about" placeholder="* About..." />
            </div>
          </div>
          <div className="create-Btn-container">
            <button className="createBtn" type="submit">Complete Form</button>
          </div>
          {/* Add message on server side to inform  visitor to login if haven't or other errors*/}
          {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>}
        </Form>
      </Container>
    </>
  )
}