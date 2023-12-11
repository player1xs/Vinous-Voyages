import { useMemo, useEffect } from 'react'
import { useActionData, useNavigate, Form } from 'react-router-dom'
// import ImageUploadField from './ImageUploadField.jsx'
import countryList from 'react-select-country-list'

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
      <h1 className="text-center bold display-3 mb-4">Create Winery</h1>
      <Form className="form" method="POST">
        <label hidden htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name" />
        <input list="countries" name="country" placeholder="Country"/>
        <datalist id="countries">
          {options.map(country => {
            return <option key={country.label} value={country.label}></option>
          })}
        </datalist>
        <label hidden htmlFor="region">Region</label>
        <input type="text" name="region" placeholder="Region" />
        <label hidden htmlFor="appelation">Appelation</label>
        <input type="text" name="appelation" placeholder="Appelation" />
        <label hidden htmlFor="varietalsGrown">Varietals grown</label>
        <input type="text" name="varietalsGrown" placeholder="Varietals grown (separate by comma)" />
        <label hidden htmlFor="range">Range</label>
        <input type="text" name="range" placeholder="Product range (separate by comma)" />
        {/* <ImageUploadField/> */}
        <label hidden htmlFor="website">Website</label>
        <input type="text" name="website" placeholder="Website URL" />
        <label hidden htmlFor="phone">Phone number</label>
        <input type="text" name="phone" placeholder="Phone number" />
        <label hidden htmlFor="address">Address</label>
        <input type="text" name="address" placeholder="Address" />
        <label hidden htmlFor="geocode">Geocode</label>
        <input type="text" name="geocode" placeholder="Geocode" />
        <label hidden htmlFor="nearbyCity">Nearby City</label>
        <input type="text" name="nearbyCity" placeholder="Nearest city/town" />
        <label hidden htmlFor="attractions">Local Attractions</label>
        <input type="text" name="attractions" placeholder="Local attractions" />
        <label hidden htmlFor="about">About</label>
        <textarea name="about" placeholder="About..." />
        {/* Add message on server side to inform  visitor to login if haven't or other errors?*/}
        {/* {res?.data?.message && <p className='danger bold mt-4'>{res.data.message}</p>} */}
        <button type="submit">Create Winery</button>
      </Form>

    </>
  )
}