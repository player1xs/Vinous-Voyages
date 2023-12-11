import axios from 'axios'
import { formToObj, getToken } from '../helpers/common'
import { redirect } from 'react-router-dom'

export async function createWinery(request) {
  const data = await formToObj(request)
  return await axios.post('/api/wineries', data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function updateWinery(request, id){
  const data = await formToObj(request)
  return await axios.put(`/api/wineries/${id}`, data, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}

export async function deleteWinery(id){
  await axios.delete(`/api/wineries/${id}`, {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
  return redirect('/wineryIndex')
}