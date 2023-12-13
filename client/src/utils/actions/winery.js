import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

export async function createWinery(request) {
  const data = await formToObj(request)
  setTimeout(console.log(data), 5000)
  return await axios.post('/api/wineries', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

// export async function updateWinery(request, id) {
//   const data = await formToObj(request)
//   return await axios.put(`/api/wineries/${id}`, data, {
//     validateStatus: () => true,
//     headers: {
//       Authorization: `Bearer ${getToken()}`
//     }
//   })
// }

// export async function deleteWinery(id) {
//   await axios.delete(`/api/wineries/${id}`, {
//     validateStatus: () => true,
//     headers: {
//       Authorization: `Bearer ${getToken()}`
//     }
//   })
//   return redirect('/wineryIndex')
// }

export async function updateOrDeleteWinery(request, id) {
  // console.log(request)
  // console.log(id)
  let data = await formToObj(request)
  // setTimeout(console.log(data), 5000)

  if (data.intent === 'update') {
    return await axios.put(`/api/wineries/${id}`, data, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
  if (data.intent === 'delete') {
    await axios.delete(`/api/wineries/${id}`, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
    return redirect('/wineryIndex')
  }
}

export async function createOrDeleteReview(request, wineryId, reviewId) {
  let data = await formToObj(request)

  if (data.intent === 'create') {
    return await axios.post(`/api/wineries/${wineryId}/reviews`, data, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  }
  if (data.intent === 'delete') {
    await axios.delete(`/api/wineries/${wineryId}/reviews/${reviewId}`, {
      validateStatus: () => true,
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
    return redirect(`/wineryIndex/${wineryId}`)
  }
}