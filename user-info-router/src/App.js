import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useParams
} from 'react-router-dom'
import Home from './Component/Home/Home';
import About from './Component/About/About';
import User from './Component/User/User';
import Comment from './Component/Comment/Comment';

function App() {
  return (
    <Router >
      <div className='App'> 
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          
          <Route path="/comment/:id">
           <Comment/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
