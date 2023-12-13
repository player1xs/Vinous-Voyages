import { useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  console.log('SPECIFIC ERROR LAYOUTS ->', error.status)
  return (
    <>
      <div id='error-page'>
        <div className="error-box">
        {/* <h1><i>{error.statusText || error.message}</i></h1> */}
          <img className="error-gif" src="https://cdn.dribbble.com/users/1241808/screenshots/2864457/media/fe02ff08975d34bd5e9bc4ef1ac14c3f.gif" />
          <Link to={`/rick`} className="backBtn">Back</Link>
        </div>
      </div>
    </>
  )
}