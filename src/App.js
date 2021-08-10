
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Service from './Components/Service'
import Search from './Components/Search';
import Applications from './Components/Applications';
import Tutorial from './Components/Tutorial';
import VipSignUp from './Components/VipSignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/service" exact component={Service}/>
          <Route path="/search" exact component={Search}/>
          <Route path="/tutorial" exact component={Tutorial}/>
          <Route path="/vipsignup" exact component={VipSignUp}/>
          <Route path="/applications" exact component={Applications}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
