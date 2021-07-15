import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ListItems from './components/ListItems';
import { Route } from "react-router-dom"
import TechInformation from './components/TechInformation';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        Home and welcome
      </Route>
      <Route exact path="/inventory">
        <ListItems />
      </Route>
      <Route path="/product/:id">
        <TechInformation />
      </Route>
      <Footer />
    </div>
  );
}

export default App;

