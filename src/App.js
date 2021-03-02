import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  // const [dropdown, setDropdown] = useState(false)

    return (
      <div className="App">
        <Router>
          <Navbar/>
          <div className="App-header">

            
            <Switch>
              <Route path='/' exact component={Home}  />
              <Route path='/Shop' exact component={Shop}  />
              <Route path='/About' exact component={About}  />
            </Switch>
          </div>
          <Footer/>
        </Router>
         
      </div>
    );
};  





export default App;