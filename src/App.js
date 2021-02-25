import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';

const App = () => {
    return (
      <div className="App">
        <Router>
          <div className="App-header">
            
            <Switch>
              <Route path='/' exact component={Home}  />
              <Route path='/Shop' exact component={Shop}  />
            </Switch>
          </div>
        </Router>
      </div>
    );
};





export default App;