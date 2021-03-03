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
import Search from './components/pages/Search/Search';


const App = () => {
  // const [dropdown, setDropdown] = useState(false)
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [result, setResult] = useState(false);

  const searchHandler = (val) => {
    console.log(val);
    setSearch(val.target.value);
  } 

  const dataSearch = async () => {
  
    const res = await fetch(`http://localhost:5000/search/${search}`);
    
    const data = await res.json();
    setSearchResults(data);
    setResult(true);
    console.log(data);

    }
 
  
    return (
      <div className="App">
        <Router>
        <NavBar searchHandle={(e)=>searchHandler(e)} searchData={dataSearch}/>
            <SocialBar />
          <div className="App-header">
            <Switch>
              <Route path='/' exact component={Home}  />
              <Route path='/Shop' exact component={Shop}  />
              <Route path='/About' exact component={About}  />
  {result &&<Route path='/search/'><Search searchRes={searchResults} /></Route>}
  <Route path='/checkout'/>
            </Switch>
          </div>
        </Router>
        <Footer />
            <BottomFooter />
      </div>
    );
};  





export default App;