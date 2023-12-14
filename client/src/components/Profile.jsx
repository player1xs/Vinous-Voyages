
import { useLoaderData } from "react-router"
export default function Profile() {
  const userData = useLoaderData()
  console.log(userData)
  return (
    <>
      <div>
        <h1>Username</h1>
        {userData.map(user => {
          console.log(user)
          const { _id, username, image, wineriesCreated, email } = user
          return (
            <div key={_id}>
              <img src={image}></img>
              <p>{username} </p>
              <p>{email}</p>
              <ul>
                {wineriesCreated.map(winery => {
                  return (
                    <li key={winery._id}>{winery.name}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}









