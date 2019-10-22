import React from "react";
import axios from "axios";

class Home extends React.Component {
  state = {test: {}};

  // componentDidMount() {
  //   axios.get("https://swapi.co/api/films/1")
  //     .then(res => {
  //       this.setState({test: res.data})
  //     })
  //     .catch( err => {
  //       console.log(err)
  //     })
  // }

  render() {
    return(
      <div>
        Home Yo
      </div>
    );
  };
};

export default Home;