import React from 'react';
import PlanetView from "./Components/PlanetView";
import PersonView from "./Components/PersonView";
import People from "./Components/People";
import FilmView from "./Components/FilmView";
import Films from "./Components/Films";
import Planets from "./Components/Planets";
import NoMatch from "./Components/NoMatch";
import Navbar from "./Components/Navbar";
import { Switch, Route} from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";


const App = () => (
  <>
  <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/planets" component={Planets} />
      <Route exact path="/planets/:id" component={PlanetView} />
      <Route exact path="/people" component={People} />
      <Route exact path="/people/:id" component={PersonView} />
      <Route exact path="/films" component={Films} />
      <Route exact path="/films/:id" component={FilmView} />
      <Route component={NoMatch} />
    </Switch>
  </>
)

export default App;
