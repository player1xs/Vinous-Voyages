
import { Link } from "react-router-dom"

export default function WinerySingle() {

  // const winery = useLoaderData()
  // console.log(winery)
const winery = useLoaderData()
const { name, about, region, appelation, variatalsGrown, image } = winery
  return (
    <>
      <div className="sglHeader">
        <h1>{ name }</h1>
        <Link to={`/wineryIndex`} className="backBtn">Back</Link>
      </div>
      <div className="WineryInfo">
        <img className="imgDr"src={ image }/>
        <div className="text">
          <p className="region">{ region }</p>
          <p className="appelation">{ appelation }</p>
          <p className="instructions">{ about }</p>
          <ul className="varietals">
            {variatalsGrown.map((item, idx) => {
              return <li key={idx}>{item}</li>
            })}
          </ul>
        </div>
      </div>
    </>
  )
}