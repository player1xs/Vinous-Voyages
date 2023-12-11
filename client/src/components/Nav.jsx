import { useState } from 'react'
import { Link } from 'react-router-dom'

import Model from 'react-bootstrap/Modal'
import Modal from 'react-bootstrap/Modal'

// import { FaCircleUser } from 'react-icons/fa6'
import Button from 'react-bootstrap/Button'
import userIcon from '../images/image.png'
import { Form } from 'react-router-dom'
export default function Nav() {

  const [show, setShow] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  

  return (
    <>
      <header>
        <h1><Link to='/'>Vinous Voyages</Link></h1>

        <button className='nav-toggle' onClick={() => setShow(true)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Button className="me-4 mb-4" onClick={() => setModalShow(true)}>
          <Link to='/'><img className='logo' src={ userIcon}  height='50' alt='user icon' /></Link>
        </Button>
      </header>
      <Model show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Model.Header closeButton>
          <nav onClick={() => setShow(false)}>
            <Link to='/'>Home</Link>&nbsp;
            <Link to='/wineryIndex'>Winery Index</Link>&nbsp;
            <Link to='/createWinery'>Create Winery</Link>&nbsp;
            {/* <Link to='/login'>Log-in</Link>&nbsp;
            <Link to='/register'>Register</Link>&nbsp; */}
          </nav>
        </Model.Header>
      </Model>


      <Modal show={modalShow} halfscreen={true} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 className='text-center bold display-3 mb-4'>Login</h1>
          <Form className='form' method='POST'>
            <input type='email' name='email' placeholder='Email' />
            <input type='password' name='password' placeholder='Password' />
            <button className='btn btn-grey' type='submit'>Login</button>
          </Form>
          <p><Link to='/register'>Create an Account</Link></p>
        </Modal.Body>
      </Modal>
    </>
  )
}