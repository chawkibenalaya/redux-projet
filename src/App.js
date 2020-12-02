import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import ListeVoiture from './components/ListeVoiture'
import AjoutVoiture from './components/AjoutVoiture'
import {BrowserRouter, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route path="/list" component={ListeVoiture}/>
    <Route path="/ajout" component={AjoutVoiture}/>
  </BrowserRouter>
  );
}

export default App;
