import { Form } from 'react-router-dom'

export default function Register() {
  return (
    <>
      <h1 className='text-center bold display-3 mb-4'> Register</h1>
      <Form className='form' method='POST'>
        <input type='text' name='username' placeholder='Username' />
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <input type='password' name='passwordConfirmation' placeholder='confirm password' />
        <button className='btn btn-grey' type='submit'>register</button>
        </Form>
      </>
    )
}