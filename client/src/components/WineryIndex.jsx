import { useLoaderData } from 'react-router-dom'

export default function WineryIndex(){

  const wineries = useLoaderData()
  console.log(wineries)

  return (
    <> 
      <h1> winery Index </h1>
    </>
  )
}