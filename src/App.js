import React from 'react';
import Home from './containers/home/home';
import Login from './containers/login/login';
import Register from './containers/register/register';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer/>

      
      <Router>
        
        <Switch>


          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
          <Route path="/home" exact ><Home />
          </Route>
          <Route path="/register" exact ><Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const Test = (props) => {
  

  return (
    <div>
      Test route
      </div>
  )
}

export default App;
