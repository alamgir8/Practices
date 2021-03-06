
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Country from './Components/Country/Country';
import CountryDetails from './Components/CountryDetails/CountryDetails';

function App() {
  return (
        <Router>
            <Switch>
              <Route path='/home'>
                  <Home/>
              </Route>
              <Route path='/country'>
                  <Country/>
              </Route>
              <Route path='/about/:name'>
                  <CountryDetails/>
              </Route>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="*">
                  <NoMatch/>
              </Route>
            </Switch>
        </Router>
  );
}

export default App;
