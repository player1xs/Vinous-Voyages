import { Link } from 'react-router-dom'

export default function Rick() {
  return (
    <>
      <h3> HA HA HA HA HA HA </h3>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Gp7F0nCmqPy1SSK9?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <Link to={`/wineryIndex`} className="backBtn">Ok Ok - back to the index...</Link>
    </>
  )
}