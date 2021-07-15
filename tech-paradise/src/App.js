import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ListItems from './components/ListItems';
import { Route } from "react-router-dom"
import TechInformation from './components/TechInformation';
import ReactStars from "react-rating-stars-component";
import EditForm from "./components/EditForm"

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
      <Route path="/reviews">
      <EditForm />
        <ReactStars />
      </Route>
      <Footer />
    </div>
  );
}

export default App;

