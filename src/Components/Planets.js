import React from "react";
import axios from "axios";
import {Link, } from "react-router-dom";
import { Container, Header, Pagination } from "semantic-ui-react";

class Planets extends React.Component {
  state = { planetsObj: {}, planets: [], page: 1 };

  // componentDidMount() {
  //   axios.get("https://swapi.co/api/planets/")
  //     .then(res => {
  //       this.setState({ planetsObj: res.data, planets: res.data.results})
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }


  render() {
    const {planets} = this.state;
    return (
      <div>
        {planets.map(p => (
          <Container>
            <Link to={`/planets/${p.id}`}>
              <Header as="h3">
                {p.name}
              </Header>
            </Link>
          </Container>
        ))}
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