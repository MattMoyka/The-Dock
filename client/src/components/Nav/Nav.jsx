import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
      <Link to='/items'>The Dock</Link>
      <Link to='/signin'>Sign In</Link>
      <Link to='/signup'>Sign Up</Link>
    </div>
  )
}
