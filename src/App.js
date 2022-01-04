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
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header/>
          <Switch>

            <Route exact path='/home'>
              <Home></Home>
            </Route>

            <Route exact path='/'>
              <Home></Home>
            </Route>

            <PrivateRoute exact path='/blogs'>
              <Blogs></Blogs>
            </PrivateRoute>

            <Route exact path='/singleService/:serviceId'>
              <SingleService></SingleService>
            </Route>

            <Route exact path='/services'>
              <Services/>
            </Route>

            <Route exact path='/login'>
              <Login/>
            </Route>

            <Route exact path='/register'>
              <Register/>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
