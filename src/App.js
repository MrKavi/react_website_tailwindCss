
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import TransitionArray from './Components/Animation/Animation';
// import Footerr from './Components/Footer/Footer';
import Home from './Pages/Index';
import SignIn from './Pages/Sign/SignIn';
import SignUp from './Pages/Sign/SignUp';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' component={Home} exact/>
      <Route path="/signIn" component={SignIn} exact/>
            <Route path="/signup" component={SignUp} exact/>
      </Switch>
    </Router>
  ); 
}

export default App;
