import { useState } from 'react'
import { Link } from 'react-router-dom'
import Model from 'react-bootstrap/Modal'

export default function Nav() {

  const [show, setShow] = useState(false)
  return (
    <>
      <header>
        <button className='nav-toggle' onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      <Model show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Model.Header closeButton>
          <nav onClick={() => setShow(false)}>
            <Link to='/'>Home</Link>&nbsp;
            <Link to='/wineryIndex'>Winery index</Link>&nbsp;
            <Link to='/login'>Log-in</Link>&nbsp;
            <Link to='/register'>Register</Link>&nbsp;
          </nav>
        </Model.Header>
      </Model>
    
    </>
  )
}