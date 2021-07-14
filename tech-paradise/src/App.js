import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import InventoryCatergory from './components/InventoryCatergory';
import { Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        Home and welcome
      </Route>
      <Route exact path="/inventory">
      <InventoryCatergory />
      </Route>
      <Footer />
    </div>
  );
}

export default App;

