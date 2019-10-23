import React, {useState, useEffect} from "react";
import {Header, Container, } from "semantic-ui-react";
import Axios from "axios";

const PlanetView = (props) => {
  useEffect(() => {
    Axios.get(props.location.state.url)
      .then(res => {
        setPlanet(res.data)
      })
  }, []);

  const [planet, setPlanet] = useState({})

  return(
    <div>
      <Header textAlign="center" as="h1">
        {planet.name}
      </Header>
      <Container>
        <p>Population: {planet.population}</p>
        <p>Gravity: {planet.gravity}</p>
        <p>Terrain: {planet.terrain}</p>
        <p>Climate: {planet.climate}</p>
      </Container>
    </div>
  );
};

export default PlanetView;