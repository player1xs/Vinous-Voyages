import { Link } from 'react-router-dom'

export default function UserIcon() {
  return (
    <>
      <Link to='/login'>Log-in</Link>
      <Link to='/register'>Register</Link>
    </>
  )
}