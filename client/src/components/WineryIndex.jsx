import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


export default function WineryIndex(){

  const allWineries = useLoaderData()
  console.log(allWineries)

  //const [wineries, setWineries] = useState(allWineries)
  const [idList, setIdList] = useState([])
  const [idRnd, setIdRnd] = useState(0)


  useEffect(() => {
    const ids = allWineries.map(winery => {
      return winery._id
    })
    setIdList(ids)
  }, [allWineries])

  useEffect(() => {
    const i = Math.floor(Math.random()*idList.length)
    setIdRnd(idList[i])
  }, [idList])

  return (
    <> 
      <h2> Select your next Oenologic Adventures... </h2>
      <div className='index-body'>
        <div className="filter-bar">
          <Link to={`/wineryIndex/${idRnd}`} className="randomBtn">Random</Link>
        </div>
        <Container fluid className='wineryList overflow-auto'>
          { allWineries.map(winery => {
            const { _id, name, image } = winery
          return (
            <Col
            key = {_id}
            as= {Link}
            to={`/wineryIndex/${_id}`}
            >
              <div className="single" style={ { backgroundImage: `url(${image})` } }>
                <div className="name">{name}</div>
              </div>
            </Col>
          )
          })}
        </Container>
      </div>
    </>
  )
}