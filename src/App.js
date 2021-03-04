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
import Categories from './components/pages/Categories/Categories';
import Cart from './components/pages/Cart/Cart';


const App = () => {
  // const [dropdown, setDropdown] = useState(false)
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [category, setCategory] = useState([]);
  const [result, setResult] = useState(false);
  const [catResult, setCatResult] = useState(false);

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
    
  const categorySearch = async (category) => {

    console.log(category);
    const res = await fetch(`http://localhost:5000/category/${category}`)

    const data = await res.json();
    setCategory(data);
    setCatResult(true);
    console.log(data);

  }
 
  
    return (
      <div className="App">
        <Router>
        <NavBar searchHandle={(e)=>searchHandler(e)} searchData={dataSearch} 
        media={()=>categorySearch("music, books and films")} clothing={()=>categorySearch("Clothing")}
        accessories={()=>categorySearch("accessories")} souveniers={()=>categorySearch("souvenirs")} 
        homeware={()=>categorySearch("homeware")}/>
            <SocialBar />
          <div className="App-header">
            <Switch>
              <Route path='/' exact component={Home}  />
              <Route path='/Shop' exact component={Shop}  />
              <Route path='/About' exact component={About}  />
  {result &&<Route path='/search/'><Search searchRes={searchResults} /></Route>}
  <Route path='/checkout'/>
  <Route path='/cart' component={Cart}/>
  {catResult &&<Route path='/category/'><Categories categoriesRes={category}/></Route>}
            </Switch>
          </div>
        </Router>
        <Footer />
            <BottomFooter />
      </div>
    );
};  





export default App;