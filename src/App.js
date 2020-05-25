import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/NavBar';
import Movies from './components/Movies';
import Tv from './components/Tv';
import Home from './components/Home'
import Videos from './components/Video';
import NavBar from './components/NavBar';



const App = () => {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/movie" component={Movies}></Route>
        <Route exact path="/tv" component={Tv}></Route>
        {/* <Route exact path="/:media/category/:categoria" component={}></Route>
        <Route exact path="/:media/:id" component={}></Route>
        <Route exact path="/:media/:id/:paginacion" component={}></Route> */}
      </Switch>



    </Router>
  );
}

export default App;
