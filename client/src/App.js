import React, { Component } from "react";
import { addNPlayer } from "./Api";
import Addplayerstat from "./Addplayerstat";
import axios from "axios";

class App extends Component {
  state = {
    update: "no",
  };

  constructor(props) {
    super(props);

    addNPlayer((err, update) =>
      this.setState({
        update,
      })
    );
  }

  addPlayer = (name, Goals, Matches) => {
    axios
      .post("http://localhost:1337/players", {
        name,
        Goals,
        Matches,
      })
      .then((res) => console.log("done"));
  };

  render() {
    return (
      <div className="App">
        <Addplayerstat addPlayer={this.addPlayer} />
        <p className="App-intro">player added: {this.state.update}</p>
      </div>
    );
  }
}

export default App;
