import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';

const App = () => {
  // const [dropdown, setDropdown] = useState(false)

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
         {/* <button onClick={() => setDropdown(!dropdown)}>open menu</button>        
        {dropdown ? (
          <div>
            <ul>
              <li>This is the dropdown now showing on the screen</li> 
            </ul>
          </div>
        ) : (
          null
        )} */}
      </div>
    );
};  





export default App;