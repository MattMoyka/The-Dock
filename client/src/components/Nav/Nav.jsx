import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useState } from 'react'

export default function Nav(props) {
  const { user } = props;
  const [ham, setHam] = useState(false)

  const toggleHamburger = () => {
    setHam(!ham)
  }

  const authenticatedOptions = (
    <>
      <NavLink className="link-items" to="/items">
        Items
      </NavLink>
      <nav className={ham ? 'showMenu' : 'menu'}>
        <NavLink className="link menuItem" to="/new">
          Add Item
        </NavLink>
        <NavLink className="link menuItem" to="/signout">
          Sign Out
        </NavLink>
      </nav>
      <button class="hamburger" onClick={toggleHamburger}>
        <i className={ham ? 'fas fa-skull-crossbones' : 'fas fa-bars'}></i>
      </button>
    </>
  );

  const unauthenticatedOptions = (
    <>
      <NavLink className="link-items" to="/items">
        Items
      </NavLink>
      <nav className={ham ? 'showMenu' : 'menu'}>
        <NavLink className="link menuItem" to="/signup">
          Sign Up
        </NavLink>
        <NavLink className="link menuItem" to="/signin">
          Log In
        </NavLink>
      </nav>
      <button class="hamburger" onClick={toggleHamburger}>
        <i className={ham ? 'fas fa-skull-crossbones' : 'fas fa-bars'}></i>
      </button>
    </>
  );





  // const alwaysOptions = (
  //   <>
  //     <NavLink className="link" to="/items">Items</NavLink>
  //   </>
  // )










  return (
    <nav className="nav">
      <div className="logo">
        <NavLink className="logo-link" to="/">
          <img className='logo-img' src='https://i.imgur.com/PJVwcJg.png' height='30px' />
          <div>
            The Docks
          </div>
        </NavLink>
      </div>
      <div className="nav-links">
        {user && <div className="link-welcome">Welcome, {user.username}!</div>}
        {/* {alwaysOptions} */}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  );
}
