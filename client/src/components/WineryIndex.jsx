import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


export default function WineryIndex() {

  const allWineries = useLoaderData()
  console.log(allWineries)

  //const [wineries, setWineries] = useState(allWineries)
  const [idList, setIdList] = useState([])
  const [idRnd, setIdRnd] = useState(0)

  // Filter states
  const [filters, setFilters] = useState({
    country: 'All',
    search: ''
  })
  const [countries, setCountries] = useState([])
  const [filteredWineries, setFilteredWineries] = useState([])

  // Filter function
  function handleChange(e) {
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value
    }
    setFilters(newObj)
  }

  // Filter effects
  // ! Effects
  useEffect(() => {
    // Update display of shown wineries by name, region, appelation or varietals grown according to keys typed by user AND any dropdown selected by their country
    const pattern = new RegExp(filters.search, 'i')
    const filteredArray = allWineries.filter(winery => {
      return (pattern.test(winery.name) || pattern.test(winery.region) || pattern.test(winery.appelation) || pattern.test(winery.varietalsGrown)) && (winery.country === filters.country || filters.country === 'All')
    })
    setFilteredWineries(filteredArray)
    // Update dropdown country options by extracting unique country entries in db
    if (allWineries.length > 0 && countries.length === 0) {
      const countriesArr = [...new Set(allWineries.map(winery => winery.country))].filter(Boolean)
      setCountries(countriesArr)
    }
  }, [filters])

  useEffect(() => {
    const ids = allWineries.map(winery => {
      return winery._id
    })
    setIdList(ids)
  }, [allWineries])

  useEffect(() => {
    const i = Math.floor(Math.random() * idList.length)
    setIdRnd(idList[i])
  }, [idList])

  return (
    <>
      <h2> Select your next Oenologic Adventures... </h2>
      <div className='index-body'>
        <div className="filter-bar">
          <select id="dropdown" name="country" value={filters.country} onChange={handleChange}>
            <option value="All">All</option>
            {countries.length > 0 &&
              countries.map(country => {
                return <option key={country} value={country}>{country}</option>
              })
            }
          </select>
          <input id="search" name="search" placeholder='Search...' value={filters.search}
            onChange={handleChange} />
          <Link to={`/wineryIndex/${idRnd}`} className="randomBtn">Random</Link>
        </div>
        <Container fluid className='wineryList overflow-auto'>
          {filteredWineries.map(winery => {
            const { _id, name, image } = winery
            return (
              <Col
                key={_id}
                as={Link}
                to={`/wineryIndex/${_id}`}
              >
                <div className="single" style={{ backgroundImage: `url(${image})` }}>
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