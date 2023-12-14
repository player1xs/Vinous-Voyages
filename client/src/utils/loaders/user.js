import axios from "axios"
import { getToken } from "../helpers/common"

export async function getSingleUser() {
  return await axios.get('/api/profile', {
    validateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  })
}