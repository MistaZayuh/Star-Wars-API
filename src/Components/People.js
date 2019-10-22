import React from "react";
import axios from "axios";
import { Link, } from "react-router-dom";
import { Button, Container, Header, Input, Pagination, } from "semantic-ui-react";

class People extends React.Component {
  state = { peopleObj: {}, people: [], page: 1, search: "", results: null, };

  // componentDidMount() {
  //   axios.get("https://swapi.co/api/people/")
  //     .then(res => {
  //       this.setState({ peopleObj: res.data, people: res.data.results})
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
    axios.get(`https://swapi.co/api/people/?search=${this.state.search}`)
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

  renderPeople = () => (
    this.state.people.map(p => (
      <Container>
        <Link to={`/people/${p.name}`}>
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
        <Link to={`/people/${p.name}`}>
          <Header as="h3">
            {p.name}
          </Header>
        </Link>
      </Container>
    ))
  );


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

export default People;