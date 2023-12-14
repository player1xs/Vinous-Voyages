import { useState, useEffect } from 'react'
import { Link, useActionData, useNavigate } from 'react-router-dom'
// import Model from 'react-bootstrap/Modal'
import Modal from 'react-bootstrap/Modal'

import Button from 'react-bootstrap/Button'
// import userIcon from '../images/image.png'
import { Form } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
// import { FaUserCircle } from "react-icons/fa";

import { setToken } from '../utils/helpers/common'

export default function Nav() {

  const toggleModal = () => {
    // Toggle the state to show/hide the register modal
    setModalShow((prevShow) => !prevShow)
  }


  const res = useActionData()
  const navigate = useNavigate()

  useEffect(() => {
    if (res?.status === 201) {
      setToken(res.data.token)
      navigate('/login')
    }
  }, [res, navigate])

  const [show, setShow] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [loginModalShow, setLoginModalShow] = useState(false)

  return (
    <>
      <div className='navbar'>
        <div className="header-title">
          <h1><Link to='/'>Vinous Voyages</Link></h1>
        </div>
        <div className="header-menues">
          <header className='p-2 p-md-3 p-lg-4'>
            <button className='nav-toggle' onClick={() => setShow(true)} >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </header>
        
          <Modal show={show} fullscreen={true} onHide={() => setShow(false)} className='indexs'>
            <Modal.Header closeButton>
            </Modal.Header>
            <nav onClick={() => setShow(false)}>
              <ul className=' burger-menu nav nav-underline navbar-link-danger bg-link-danger'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link' >Home</Link>&nbsp;
                </li>
                <li className='nav-item'>
                  <Link to='/wineryIndex' className='nav-link' >Winery Index</Link>&nbsp;
                </li>
                <li className='nav-item'>
                  <Link to='/wineryIndex/create' className='nav-link' >Create Winery</Link>&nbsp;
                </li>
                {/* <Link to='/login'>Log-in</Link>&nbsp;
                <Link to='/register'>Register</Link>&nbsp; */}
              </ul>
            </nav>
          </Modal>
          <Button className="icon" onClick={toggleModal}>
            <FaRegUserCircle fill="black" className="user-icon"/>
            {/* <img className='logo rounded-circle d-inline-block align-center' src={userIcon} height='50' alt='user icon' /> */}
          </Button>
        </div>

        <Modal show={modalShow} halfscreen={true} onHide={() => setModalShow(false)} className='centered-modal'>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Form className='create' method='POST'>
              <h1 className='text-center'>sign-up</h1>
              <input type='text' name='username' placeholder='Username...' />
              <input type='email' name='email' placeholder='Email...' />
              <input type='password' name='password' placeholder='Password...' />
              <input type='password' name='passwordConfirmation' placeholder='confirm password...' />
              <button className=' btn btn-danger' type='submit'>register</button>
              {/* Below will return a message to user if username taken, etc. Need to set this up. */}
              {res && <p className='danger'>{res.data.message}</p>}
              <div className='sign in'>
                Already have an account ?  &nbsp;
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
              <button className='btn btn-danger' type='submit'> Login </button>
              <button type="button" className="btn btn-danger" onClick={() => {
                setModalShow(true)
                setLoginModalShow(false)
              }}>
                sign up
              </button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}