import axios from "axios"
import { getToken } from "../helpers/common"
// export async function getSingleUser(){
//   const { data } = await axios.get('/api/profile', {
//     headers: {
//       Authorization: `Bearer ${getToken()}`
//     }
//   })
//   return data
// } 

export async function getSingleUser() {
  const res =  await axios.get('/api/profile', {
    ValidateStatus: () => true,
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }) 
  return res.json()
}