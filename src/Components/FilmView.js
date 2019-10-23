import React, {useState, useEffect} from "react";
import {Container, Header} from "semantic-ui-react";
import Axios from "axios";

const FilmView = (props) => {
  useEffect(() => {
    Axios.get(props.location.state.url)
      .then( res => {
        debugger
        setFilm(res.data)
      })
  }, []);

  const [film, setFilm] = useState([]);

  return(
    <div>
      <Header as="h1">
        {film.title}
      </Header>
      <Container>
        <p>Episode #: {film.episode_id}</p>
        <p>Director: {film.director}</p>
        <p>Opening Text: {film.opening_crawl}</p>

      </Container>
    </div>
  );
};

export default FilmView;