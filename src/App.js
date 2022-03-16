import './App.css';
import Navbar from './Navbar';
import GetStarted from './GetStarted';
import Homepage from './Homepage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
       <Switch>
            <Route exact path='/'>
                <Homepage/>
            </Route>

            <Route path='/Getstarted'>
                <GetStarted/>
            </Route>
{/* 
            <Route path='/Service'>
                <Service/>
            </Route>

            <Route path='*'>
                <Error/>
            </Route> */}

         
       </Switch>

      </Router>

     
    </div>
  );
}

export default App;
