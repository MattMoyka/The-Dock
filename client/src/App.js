import { Route } from 'react-router-dom'
import './App.css';
import Landing from './screens/Landing/Landing'
import SignUp from './screens/Signin/Signin'
import Signin from './screens/Signin/Signin';
import Listing from './screens/Listing/Listing';
import Details from './screens/Details/Details';
import AddItem from './screens/AddItem/AddItem';
import EditItem from './screens/EditItem/EditItem';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/items">
        <Listing />
      </Route>
      <Route exact path="/items/:id">
        <Details />
      </Route>
      <Route exact path="/new">
        <AddItem />
      </Route>
      <Route exact path="/edit/:id">
        <EditItem />
      </Route>
    </div>
  );
}

export default App;
