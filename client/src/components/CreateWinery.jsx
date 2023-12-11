import { useMemo, useState } from 'react'
import ImageUploadField from './ImageUploadField.jsx'
import countryList from 'react-select-country-list'

export default function CreateWinery() {

  const options = useMemo(() => countryList().getData(), [])
  // console.log(options)

  const [formData, setFormData] = useState({
    name: '',
    country: '',
    region: '',
    appelation: '',
    varietalsGrown: [],
    range: [],
    image: '',
    phone: 0,
    website: '',
    address: '',
    nearbyCity: '',
    attractions: []
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input type="text" name="name" placeholder='Name of Winery' onChange={handleChange} value={formData.name} />
        {/* make country a dropdown with all options and link up same to filter */}
        {/* <input type="text" name="country" placeholder='Country - eng Name with capital letter e.g.: France' onChange={handleChange} value={formData.country} /> */}
        <input list="countries" name="country" onChange={handleChange} value={formData.country} />
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
        <input type="submit" value="Add Winery" />
      </form>


    </>
  )
}