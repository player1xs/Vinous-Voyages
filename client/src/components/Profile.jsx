
import { useLoaderData } from "react-router"

export default function Profile() {
  const user = useLoaderData()
  console.log(user)

  return (
    <>
      <div className="profile-container">
        <img src={user.data.image} alt="Profile Picture" />
        <p>{user.data.username}</p>
        <p>{user.data.email}</p>
        <ul>
          {user.data.wineriesCreated.map(winery => {
            const { _id, name } = winery
            return <li key={_id}>{name}</li>
          })}
        </ul>
      </div>
    </>
  )
}









