import { Form, useActionData, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Register() {

  const res = useActionData()
  console.log(res)

  const navigate = useNavigate()

  useEffect(() => {
    // If registration is successful, navigate to login page
    // Use optional chaining to check if res is defined and not throw error if not
    if (res?.status === 201) {
      navigate('/login')
    }
  }, [res, navigate])

  return (
    <>
      <h1 className='text-center bold display-3 mb-4'> Register</h1>
      <Form className='form' method='POST'>
        <input type='text' name='username' placeholder='Username' />
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <input type='password' name='passwordConfirmation' placeholder='confirm password' />
        <button className='btn btn-grey' type='submit'>register</button>
        {/* Below will return a message to user if username taken, etc. Need to set this up. */}
        {/* {res && <p className='danger'>{res.data.message}</p>} */}
        </Form>
      </>
    )
}