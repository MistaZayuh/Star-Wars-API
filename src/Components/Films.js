import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Container, Header, Input, Pagination, } from "semantic-ui-react";

class Films extends React.Component {
  state = { filmsObj: {}, films: [], search: "", results: null, };

  // componentDidMount() {
  //   axios.get("https://swapi.co/api/films/")
  //     .then(res => {
  //       this.setState({ filmsObj: res.data, films: res.data.results})
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.co/api/films/?search=${this.state.search}`)
      .then(res => {
        this.setState({ results: res.data.results })
      })
      .catch(err => {
        console.log(err)
      })
  };

  clearInput = () => {
    this.setState({ search: "", results: [] })
  };

  renderFilms = () => (
    this.state.films.map(f => (
      <Container>
        <Link to={`/films/${f.name}`}>
          <Header as="h3">
            {f.name}
          </Header>
        </Link>
      </Container>
    ))
  );

  renderResults = () => (
    this.state.results.map(f => (
      <Container>
        <Link to={`/people/${f.name}`}>
          <Header as="h3">
            {f.name}
          </Header>
        </Link>
      </Container>
    ))
  );


  render() {
    const { films, search, results } = this.state;
    return (
      <div>
        <div>
          <Header textAlign="center" as="h1">Films</Header>
          <div>
            <Input
              placeholder="Search..."
              name="search"
              value={search}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <Button onClick={this.handleSubmit}>
              Search
            </Button>
            <Button onClick={this.clearInput}>
              Reset
            </Button>
          </div>
        </div>
        <Container>
          {
            results ?
              this.renderResults()
              :
              this.renderFilms()
          }
        </Container>
        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          totalPages={10}
        />
      </div>
    );
  };
};

export default Films;