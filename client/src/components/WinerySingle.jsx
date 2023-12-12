import { useLoaderData, Link, Form } from "react-router-dom"

import { activeUser } from '../utils/helpers/common'

export default function WinerySingle() {

  const winery = useLoaderData()
  const { _id, name, about, region, appelation, varietalsGrown, image, owner, reviews } = winery
  return (
    <>
      {activeUser() === winery.owner._id &&
        <div>
          <button className="update-delete"><Link to={`/wineryIndex/${_id}/update`}>Update / Delete</Link></button>
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
      <Form className="review-form" method="POST">
        Leave a review<br></br>
        <label htmlFor="rating">Score out of 100:</label>
        <input type="text" name="rating" />
        <label hidden htmlFor="text">Review Description</label>
        <textarea name="text" placeholder="Review description..." />
        <button type="submit">Post Review</button>
      </Form>
      {reviews.map(review => {
        const { _id, rating, text, owner } = review
        return (
          <div key={_id} className="review">
            <p>{rating}</p>
            <p>{text}</p>
            <p>{owner}</p>
          </div>
        )
      })}
    </>
  )
}