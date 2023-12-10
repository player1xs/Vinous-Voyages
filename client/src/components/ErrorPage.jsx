import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)
  console.log('SPECIFIC ERROR LAYOUTS ->', error.status)
  return (
    <>
      <div id='error-page'>
        <h1><i>{error.statusText || error.message}</i></h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    </>
  )
}