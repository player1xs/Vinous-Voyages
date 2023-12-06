import { Form } from 'react-router-dom'

export default function Login() {
  return (
    <>
    <h1 className='text-center bold display-3 mb-4'>Login</h1>
    <Form className='form' method='POST'>
      <input type='email' name='email' placeholder='Email' />
      <input type='password' name='password' placeholder='Password' />
      <button className='btn btn-grey' type='submit'>Login</button>
    </Form>
    </>
  )
}
