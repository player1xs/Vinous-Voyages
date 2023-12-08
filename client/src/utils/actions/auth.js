import axios from 'axios'

// Action to post register data to database
export async function registerUser(request) {
  // Call function to convert data into object (below)
  const data = await formToObj(request)
  // Post object data to database
  return await axios.post('/api/register', data, {
    // Make sure error not thrown on screen
    validateStatus: () => true
  })
}

// Action to post login data to database
export async function loginUser(request) {
  const data = await formToObj(request)
  return await axios.post('/api/login', data, {
    validateStatus: () => true
  })
}

// Converts form data from browser into an object
async function formToObj(request) {
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}
