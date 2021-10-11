import { NavLink } from "react-router-dom"


const authenticatedOptions = (
  <>
    <NavLink to='/new'>Add Item</NavLink>
    <NavLink to='/items'>Sign Out</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/signup">Sign Up</NavLink>
    <NavLink className="link" to="/signin">Sign In</NavLink>
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
    <nav>
      <div>
        <NavLink to='/items'>The Dock</NavLink>
        <div>
          {user && <div className="link welcome">Welcome, {user.username}</div>}
          {/* {alwaysOptions} */}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}
