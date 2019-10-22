import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Container, Header, Input, Pagination, } from "semantic-ui-react";

class People extends React.Component {
  state = { peopleObj: {}, people: [], page: 1, search: "", results: null, homeworld: {}, };

  componentDidMount() {
    axios.get("https://swapi.co/api/people/")
      .then(res => {
        this.setState({ peopleObj: res.data, people: res.data.results })
      })
      .catch(err => {
        console.log(err)
      })
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.co/api/people/?search=${this.state.search}`)
      .then(res => {
        this.setState({ results: res.data.results })
      })
      .catch(err => {
        console.log(err)
      })
  };

  clearInput = () => {
    this.setState({ search: "", results: null })
  };

  renderPeople = () => {
    const { people, } = this.state
    return people.map(p => {
          return <Container>
        <Link to={{ pathname: `/people/${p.name}`, state: { url: p.url } }}>
          <Header as="h3">
            {p.name}
          </Header>
        </Link>
      </Container>
    })
  };

  renderResults = () => (
    this.state.results.map(p => {
      return <Container>
        <Link to={{ pathname: `/people/${p.name}`, state: { url: p.url } }}>
          <Header as="h3">
            {p.name}
          </Header>
        </Link>
      </Container>
    })
  );

  pageLeft = () => {
    if (this.state.page > 1) {
      var next = this.state.page -1
      axios.get(`https://swapi.co/api/people/?page=${next}`)
      .then(res => {
        this.setState({page: next, people: res.data.results})
      })
    }
  };

  pageRight = () => {
    var next = this.state.page +1
    axios.get(`https://swapi.co/api/people/?page=${next}`)
      .then(res => {
        this.setState({page: next, people: res.data.results})
      })
  };


  render() {
    const { people, search, results } = this.state;
    return (
      <div>
        <div>

          <Header textAlign="center" as="h1">Characters</Header>
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
              this.renderPeople()
          }
        </Container>
        <Container display="flex" alignItems="row">
        <Button
        icon="arrow left"
        onClick={this.pageLeft}
        />
        <p>{this.state.page}</p>
        <Button 
        icon="arrow right"
        onClick={this.pageRight}
        />
        </Container>
      </div>
    );
  };
};

export default People;