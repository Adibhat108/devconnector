import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Switch
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';

import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/create-profile" component={CreateProfile} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              <PrivateRoute exact path="/add-experience" component={AddExperience} />
              <PrivateRoute exact path="/add-education" component={AddEducation} />
            </Switch>
          </section>
        </>
      </Router>
    </Provider>
  );
};
export default App;
