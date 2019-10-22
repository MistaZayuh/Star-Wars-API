import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Container, Header, Input, Pagination, } from "semantic-ui-react";

class Planets extends React.Component {
  state = { planetsObj: {}, planets: [], page: 1, search: "", results: null, };

  // componentDidMount() {
  //   axios.get("https://swapi.co/api/planets/")
  //     .then(res => {
  //       this.setState({ planetsObj: res.data, planets: res.data.results})
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
    axios.get(`https://swapi.co/api/planets/?search=${this.state.search}`)
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

  renderPlanets = () => (
    this.state.planets.map(p => (
      <Container>
        <Link to={`/planets/${p.name}`}>
          <Header as="h3">
            {p.name}
          </Header>
        </Link>
      </Container>
    ))
  );

  renderResults = () => (
    this.state.results.map(p => (
      <Container>
        <Link to={`/planets/${p.name}`}>
          <Header as="h3">
            {p.name}
          </Header>
        </Link>
      </Container>
    ))
  );


  render() {
    const { planets, search, results } = this.state;
    return (
      <div>
        <div>

          <Header textAlign="center" as="h1">Planets</Header>
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
              this.renderPlanets()
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

export default Planets;