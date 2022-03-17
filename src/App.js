import './App.css';
import Navbar from './Navbar';
import GetStarted from './GetStarted';
import Homepage from './Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Business from './Business';
import Individual from './Individual';
import Buy from './Buy';
import Instant_Buy_Sell from './Instant_Buy_Sell';
import Sell from './Sell';
import Login from './Login';
import Verify from './Verify';
import Learn from './Learn';




function App() {
  return (
    <div>
      <Router>
        <Navbar/>
       <Switch>
            <Route exact path='/'>
                <Homepage/>
            </Route>

            <Route path='/GetStarted'>
                <GetStarted/>
            </Route>

            <Route path='/Individual'>
                <Individual/>
            </Route>

            <Route path='/Business'>
                <Business/>
            </Route>



            <Route path='/Instant_Buy_Sell'>
                <Instant_Buy_Sell/>
            </Route>

            <Route path='/Buy'>
                <Buy/>
            </Route>
            <Route path='/Sell'>
                <Sell/>
            </Route>

            <Route path='/Login'>
                <Login/>
            </Route>

            <Route path='/Verify'>
                <Verify/>
            </Route>

            <Route path='/Learn'>
                <Learn/>
            </Route>
         
       </Switch>

      </Router>

     
    </div>
  );
}

export default App;
