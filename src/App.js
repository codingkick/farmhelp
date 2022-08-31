import './App.css';
import {useSelector} from "react-redux";
import { FarmerListing } from './components/FarmerListing';
import { Login } from './components/Login';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { ConsumerListing } from './components/ConsumerListing';
import { Profile } from './components/Profile';
import PrivateRoute from './utils/PrivateRoute';

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
          {/* <Route exact path="/farmerListing" component={FarmerListing}>
          </Route> */}
          <PrivateRoute path="/farmerListing" component={FarmerListing} exact></PrivateRoute>
          <PrivateRoute path="/consumerListing" component={ConsumerListing} exact></PrivateRoute>
          <PrivateRoute path="/profile" component={Profile} exact></PrivateRoute>
          <Route exact path="/" component={Login}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
