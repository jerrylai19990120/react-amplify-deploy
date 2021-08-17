
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Components/Home';
import Service from './Components/Service'
import Search from './Components/Search';
import Applications from './Components/Applications';
import Tutorial from './Components/Tutorial';
import VipSignUp from './Components/VipSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/service" exact>
              <Service />
            </Route>
            <Route path="/search" exact>
              <Search />
            </Route>
            <Route path="/tutorial" exact>
              <Tutorial />
            </Route>
            <Route path="/vipsignup" exact>
              <VipSignUp />
            </Route>
            <Route path="/applications" exact>
              <Applications />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
