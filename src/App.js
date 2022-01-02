import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import SingleService from './Components/SingleService/SingleService';

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Switch>

          <Route exact path='/home'>
            <Home></Home>
          </Route>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/blogs'>
            <Blogs></Blogs>
          </Route>

          <Route exact path='/singleService/:serviceId'>
            <SingleService></SingleService>
          </Route>

          <Route exact path='/services'>
            <Services/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
