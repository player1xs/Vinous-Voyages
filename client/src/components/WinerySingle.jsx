import { useLoaderData, Link, Form } from "react-router-dom"

import { activeUser } from '../utils/helpers/common'

export default function WinerySingle() {

  const winery = useLoaderData()
  const { _id, name, about, region, appelation, varietalsGrown, image, owner } = winery
  return (
    <>
      {activeUser() === winery.owner._id &&
        <div>
          <Link to={`/wineryIndex/${_id}/update`}>🖊</Link>
          <Form method='DELETE'>
            <button>🗑</button>
          </Form>
        </div>
      }
      <div className="sglHeader">
        <h1>{name}</h1>
        <Link to={`/wineryIndex`} className="backBtn">Back</Link>
      </div>
      <div className="WineryInfo">
        <img className="imgDr" src={image} />
        <div className="text">
          <p className="region">{region}</p>
          <p className="appelation">{appelation}</p>
          <p className="instructions">{about}</p>
          <ul className="varietals">
            {varietalsGrown.map((item, idx) => {
              return <li key={idx}>{item}</li>
            })}
          </ul>
          <p>Added by: {owner.username}</p>
        </div>
      </div>
    </>
  )
}