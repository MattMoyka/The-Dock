import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <Link to='/items'>The Dock</Link>
      <Link to='/signin'>Login</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}
