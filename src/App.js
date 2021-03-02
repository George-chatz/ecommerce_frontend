import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Footer from "./components/Footers/Footer"
import BottomFooter from "./components/Footers/BottomFooter"
import NavBar from "./components/NavBar"
import SocialBar from "./components/socialsbar/socialsbar"
import Result from './components/pages/Result/Result'


const App = () => {
  // const [dropdown, setDropdown] = useState(false)
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchHandler = (val) => {
    console.log(val);
    setSearch(val.target.value);
  } 
 
  
    return (
      <div className="App">
        <Router>
        <NavBar />
            <SocialBar />
          <div className="App-header">
            <Switch>
              <Route path='/' exact component={Home}  />
              <Route path='/Shop' exact component={Shop}  />
              <Route path='/About' exact component={About}  />
              <Route path='/search/' exact component={Result}/>
            </Switch>
          </div>
        </Router>
        <Footer />
            <BottomFooter />
      </div>
    );
};  





export default App;