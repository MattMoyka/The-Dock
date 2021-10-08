import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Nav />
      </header>
        <Route exact path="/">
          <LandingScreen />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/items">
          <ListingPage />
        </Route>
        <Route exact path="/items/:id">
          <DetailsPage />
        </Route>
        <Route exact path="/new">
          <AddItems />
        </Route>
        <Route exact path="/edit/:id">
          <EditPage />
        </Route>
    </div>
  );
}

export default App;
