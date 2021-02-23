import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


import NavBar from "./components/navbar";


const App = () => {
    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <NavBar />
          </div>
        </Router>
      </div>
    );
};





export default App;