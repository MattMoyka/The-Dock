import { Route, Redirect } from 'react-router-dom'
import './App.css';
import { useState, useEffect } from 'react'
import { verifyUser } from './Services/users'
import Landing from './screens/Landing/Landing'
import Signin from './screens/Signin/Signin';
import Listing from './screens/Listing/Listing';
import Details from './screens/Details/Details';
import AddItem from './screens/AddItem/AddItem';
import EditItem from './screens/EditItem/EditItem';
import SignUp from './screens/SignUp/Signup';


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  return (
    <div className="App">

      <Route exact path="/">
        <Landing user={user} />
      </Route>
      <Route exact path="/signup">
        <SignUp setUser={setUser} />
      </Route>
      <Route exact path="/signin">
        <Signin setUser={setUser} />
      </Route>
      <Route exact path="/items">
        <Listing user={user} />
      </Route>
      <Route exact path="/items/:id">
        <Details user={user} />
      </Route>
      <Route exact path="/new">
        {user ? <AddItem user={user} /> : <Redirect to='/signup' />}
      </Route>
      <Route exact path="/edit/:id">
        {user ? <EditItem user={user} /> : <Redirect to='/signup' />}
      </Route>
    </div>
  );
}

export default App;
