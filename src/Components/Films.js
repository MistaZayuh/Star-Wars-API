import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Container, Header, Pagination, } from "semantic-ui-react";

class Films extends React.Component {
  state = { filmsObj: {}, films: [], };

  componentDidMount() {
    axios.get("https://swapi.co/api/films/")
      .then(res => {
        this.setState({ filmsObj: res.data, films: res.data.results})
      })
      .catch(err => {
        console.log(err)
      })
  }

  renderFilms = () => (
    this.state.films.map(f => (
      <Container>
        <Link to={{ pathname: `/films/${f.title}`, state: { url: f.url } }}>
          <Header as="h3">
            {f.title}
          </Header>
        </Link>
      </Container>
    ))
  );

  render() {
    return (
      <div>
        <Header textAlign="center" as="h1">Films</Header>
        <br />
        <br />
        <Container>
          {this.renderFilms()}
        </Container>
      </div>
    );
  };
};

export default Films;