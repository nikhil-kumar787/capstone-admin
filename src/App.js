import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, getInitialData } from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';
import NewPage from './containers/NewPage';
import Doctor from './containers/Doctor';
import Hospital from './containers/Hospital';
import User from './containers/User';
import Drcategory from './containers/Drcategory';



function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)


  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    // if(auth.authenticate){
    //   dispatch(getInitialData());
    // }
    

  }, [auth.authenticate]);

  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={Signin} />
        {/* <PrivateRoute path="/" exact component={Signin} /> */}
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/hospital" component={Hospital} />
        <PrivateRoute path="/category" component={Category} />
        <PrivateRoute path="/drcategory" component={Drcategory} />
        <PrivateRoute path="/doctor" component={Doctor} />
        <PrivateRoute path="/user" component={User} />
        <PrivateRoute path="/orders" component={Orders} />
        


        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
