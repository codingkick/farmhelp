import './App.css';
import {useSelector,useDispatch} from "react-redux";
import { NameForm } from './components/NameForm';
import { useState } from 'react';
import { Header } from './components/Header';
import { FarmerListing } from './components/FarmerListing';
import { Login } from './components/Login';
import { BrowserRouter as Router,Route,Switch,withRouter } from 'react-router-dom';

function App() {
  const myState1 = useSelector((state)=>state.userReducer);
  console.log("state::"+myState1.name);
  



  return (
    <div>
      {/* <NameForm></NameForm> */}
      {/* <Header/> */}
      <br/>
      {/* <FarmerListing></FarmerListing> */}
      {/* <Login></Login> */}
      <Router>
        <Switch>
          <Route exact path="/uid" component={withRouter(Header)}>
          </Route>
          <Route exact path="/" component={withRouter(Login)}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
