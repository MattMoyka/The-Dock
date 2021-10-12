import { NavLink } from "react-router-dom"
import SignOut from "../../screens/SignOut/SignOut"
import './Nav.css'

const authenticatedOptions = (
  <>
    <NavLink className="link" to='/new'>Add Item</NavLink>
    <NavLink className="link" to='/signout'>Sign Out</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/signup">Sign Up</NavLink>
    <NavLink className="link" to="/signin">Log In</NavLink>
  </>
)

// const alwaysOptions = (
//   <>
//     <NavLink className="link" to="/items">Items</NavLink>
//   </>
// )

export default function Nav(props) {
  const { user } = props
  console.log(user)
  return (
    <nav className="nav">
      <div>
        <NavLink className='logo' to='/items'>The Docks</NavLink>
      </div>
      <div className='nav-links'>
        {user && <div className="link">Welcome, {user.username}</div>}
        {/* {alwaysOptions} */}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>

    </nav>
  )
}
