import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ListItems from './components/ListItems';
import { Route } from "react-router-dom"
import TechInformation from './components/TechInformation';
import ReactStars from "react-rating-stars-component";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
      </Route>
      <Route exact path="/inventory">
        <ListItems />
      </Route>
      <Route path="/product/:id">
        <TechInformation />
      </Route>
      <Route>
        <ReactStars />
      </Route>
      <Footer />
    </div>
  );
}

export default App;

