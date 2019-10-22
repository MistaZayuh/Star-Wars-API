import React, {useEffect, useState} from "react";
import {Container, Header, } from "semantic-ui-react";
import Axios from "axios";

const PersonView = (props) => {
  useEffect(() => {
    Axios.get(props.location.state.url)
      .then(res => {
        setPerson(res.data)
        Axios.get(res.data.homeworld)
          .then(res => {
            setHomeworld(res.data)
          })
      })
  }, [],)

  const [person, setPerson] = useState({});
  const [homeworld, setHomeworld] = useState({});

  return(
    <div>
      <Header textAlign="center" as="h1">
        {person.name}
      </Header>
    <Container>
      <div>
        <p>Height: {person.height}</p>
        <p>Gender: {person.gender}</p>
        <p>Weight: {person.mass}</p>
        <p>Homeworld: {homeworld.name}</p>
      </div>
    </Container>
    </div>
  );
};

export default PersonView;