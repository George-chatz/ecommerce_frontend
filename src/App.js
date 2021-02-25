import React, {useState, useEffect} from 'react';
import {commerce} from './lib/commerce';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Footer from './components/Footer';



const App = () => {

const [ products, setProducts] = useState([]);

const fetchProducts = async () => {
  const response = await commerce.products.list();

  setProducts();
}

useEffect(() => {
  fetchProducts();
})


    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <Navbar />
            <Switch>
          <Route path='/' exact component={Home}  />
          <Route path='/Shop' exact component={Shop}/>
          
          
          
          
        </Switch>
          </div>
        
        <Footer/>
        </Router>
      </div>
    );
};





export default App;