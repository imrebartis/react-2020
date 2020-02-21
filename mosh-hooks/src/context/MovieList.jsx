import React, { Component } from "react";
import UserContext from "./userContext";

class MovieList extends Component {
  static contextType = UserContext;

  componentDidMount() {
    console.log("context ", this.context);
  }

  render() {
    return (
      <UserContext.Consumer>
        {UserContext => <div>Movie List {UserContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
