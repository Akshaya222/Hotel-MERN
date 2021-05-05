import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import SingleRoom from './components/SingleRoom';
import Rooms from './components/Rooms';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {Context} from './Context';

function App() {
  return (
    <div>
         <Context>
         <Router>
          <Navbar/>
          <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms" component={Rooms}/>
          <Route exact path="/singleRoom/:singleId" component={SingleRoom}/>
          <Route path="/*" component={Error}/>
          </Switch>
          </Router>   
         </Context> 
    </div>
  );
}

export default App;
