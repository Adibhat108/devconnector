import './App.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'; 
import Landing from './components/layout/Landing'; 
import Register from './components/auth/Register'; 
import Login from './components/auth/Login';
// Redux
import { Provider } from 'react-redux';  
import store from './store';

const App = () => 
  <Provider store={store}>
    <Router>
      <>
        <Navbar />
        <Route exact path ="/" component={Landing} />
        <section className="container">
          <Route exact path ="/register" component={Register} />
          <Route exact path ="/login" component={Login} />
        </section>
      </>
    </Router>
  </Provider>
export default App;
