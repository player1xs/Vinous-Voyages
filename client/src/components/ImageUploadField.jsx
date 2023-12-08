/* eslint-disable react/prop-types */
import axios from 'axios'

// eslint-disable-next-line react/prop-types
export default function ImageUploadField({ formData, setFormData }){
  
  async function handleImageUpload(e){
    const preset = import.meta.env.VITE_UPLOAD_PRESET
    const file = e.target.files[0]
    const endpoint = import.meta.env.VITE_UPLOAD_URL

    //create form to send to cloud - append file + preset
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', preset)

    // send form to endpoint
    const { data: { secure_url } } = await axios.post(endpoint, data)
    
    setFormData({ ...formData, image: secure_url })
  }

  return (
    <>
    {formData.image ?
      // eslint-disable-next-line react/prop-types
      <img src={formData.image} alt="Winery-Image" />
      :
      <imput type="file" name="image" onChange={handleImageUpload} />
    }
    </>
  )
}