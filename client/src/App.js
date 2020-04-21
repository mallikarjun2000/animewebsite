import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from  './Components/Home';
import NavComponent from './Components/Nav';
import TopAnime from './Components/TopAnime';
import Gener from './Components/Gener';
import LandingPage from './Components/LandingPage';
import SearchResults from './Components/SearchResultsPage';
import ParticularGener from './Components/ParticularGenerComponent';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <NavComponent/>
    <div className="App">
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/topanime' exact component={TopAnime}/>
            <Route path='/landingpage/:malid' exact component={LandingPage} />
            <Route path='/newanime' exact component={Gener} />
            <Route path='/searchresults/:text' exact component={SearchResults} />
            <Route path='/newanime/:gener' exact component={ParticularGener}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
