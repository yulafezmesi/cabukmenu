import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";


export class Addplayerstat extends Component {
  state = {
    name: "",
    Goals: "",
    Matches: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.name, this.state.Goals, this.state.Matches);
    this.setState({ name: "", Matches: "", Goals: "" });
  };

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeMatches = (e) => {
    this.setState({ Matches: e.target.value });
  };

  onChangeGoals = (e) => {
    this.setState({ Goals: e.target.value });
  };

  render() {
    return (
      <div style={formStyle}>
        <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
          <TextField
            type="text"
            label="Name"
            name="name"
            style={{ flex: 10 }}
            variant="outlined"
            margin="dense"
            value={this.state.name}
            onChange={this.onChangeName}
          />
          <TextField
            type="number"
            label="Goals"
            name="goals"
            style={{ flex: 10 }}
            variant="outlined"
            margin="dense"
            value={this.state.Goals}
            onChange={this.onChangeGoals}
          />
          <TextField
            type="number"
            label="Matches"
            name="matches"
            style={{ flex: 10 }}
            variant="outlined"
            margin="dense"
            value={this.state.Matches}
            onChange={this.onChangeMatches}
          />
          <Button
            type="submit"
            color="inherit"
            variant="contained"
            style={btnStyle}
          >
            submit
          </Button>
        </form>
      </div>
    );
  }
}

const btnStyle = {
  flex: 0.5,
  marginTop: "7px",
  marginBottom: "7px",
};

const formStyle = {
  padding: "5px",
};

export default Addplayerstat;
