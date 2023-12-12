import { useState, useEffect } from 'react'
import { Link, useActionData, useNavigate } from 'react-router-dom'

import Model from 'react-bootstrap/Modal'
import Modal from 'react-bootstrap/Modal'


import Button from 'react-bootstrap/Button'
import userIcon from '../images/image.png'
import { Form } from 'react-router-dom'


export default function Nav() {


  const toggleModal = () => {
    // Toggle the state to show/hide the register modal
    setModalShow((prevShow) => !prevShow)
  }

  const toggleNav = () => {
    // Toggle the state to show/hide the navigation menu
    setShow((prevShow) => !prevShow)
  }

  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])

  const [show, setShow] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [loginModalShow, setLoginModalShow] = useState(false)

  return (
    <>
      <header>
        <button className='nav-toggle' onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1><Link to='/'>Vinous Voyages</Link></h1>
        <Button className="icon" onClick={toggleModal}>
          <img className='logo' src={userIcon} height='50' alt='user icon' />
        </Button>
      </header>
      <Model show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Model.Header closeButton>
          <nav onClick={() => setShow(false)}>
            <Link to='/'>Home</Link>&nbsp;
            <Link to='/wineryIndex'>Winery Index</Link>&nbsp;
            <Link to='/wineryIndex/create'>Create Winery</Link>&nbsp;
            {/* <Link to='/login'>Log-in</Link>&nbsp;
            <Link to='/register'>Register</Link>&nbsp; */}
          </nav>
        </Model.Header>
      </Model>

      <Modal show={modalShow} halfscreen={true} onHide={() => setModalShow(false)} className='centered-modal'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form className='create' method='POST'>
            <h1 className='text-center bold display-3 mb-4'>sign-up</h1>
            <input type='text' name='username' placeholder='Username...' />
            <input type='email' name='email' placeholder='Email...' />
            <input type='password' name='password' placeholder='Password...' />
            <input type='password' name='passwordConfirmation' placeholder='confirm password...' />
            <button className='register' type='submit'>register</button>
            {/* Below will return a message to user if username taken, etc. Need to set this up. */}
            {res && <p className='danger'>{res.data.message}</p>}
            <div className='sign in'>
              Already have an account ?
              <button type="button" className="btn btn-danger" onClick={() => {
                setModalShow(false) // Close signup modal if open
                setLoginModalShow(true) // Open login modal
              }}>
                log-in
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={loginModalShow} halfscreen={true} onHide={() => setLoginModalShow(false)} className='centered-modal'>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <Form className='log_in' method='POST'>
            <h1 className='text-center bold display-3 mb-4'>Login</h1>
            <input type='email' name='email' placeholder='Email...' />
            <input type='password' name='password' placeholder='Password...' />
            <button className='btn btn-grey' type='submit'>Login</button>
            <button type="button" className="btn btn-danger" onClick={() => {
              setModalShow(true)
              setLoginModalShow(false)
            }}>
              sign up
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}