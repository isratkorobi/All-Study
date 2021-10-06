import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './component/About/About';
import Navbar from './component/Navbar/Navbar';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Services from './component/Services/Services';
import Homes from './component/Homes/Homes';
import NotFound from './component/NotFound/NotFound';



function App() {
  return (
    <div class="App">
        <Router>
        <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Homes></Homes>
            </Route>
            <Route path="/home">
              <Homes></Homes>
            </Route>
            <Route path="/about">
              <About></About>
            </Route> 
            <Route path="/service">
              <Services></Services>
            </Route> 
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route> 
          </Switch>
          <Footer></Footer>
        </Router>
    </div>
    
  );
}


export default App;
