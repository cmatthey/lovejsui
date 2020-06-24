import React, { Component } from "react";

class SearchBar extends Component {
  state = { screenName: "", displayName: "" };
  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">
          {this.props.tUser.count}
        </span>
        <input
          type="text"
          placeholder="screen name"
          onChange={(event) => {
            this.setState({ screenName: event.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="display name"
          onChange={(event) => {
            this.setState({ displayName: event.target.value });
          }}
        ></input>
        <div
          onClick={() => {
            this.props.onSearch(this.state.screenName, this.state.displayName);
          }}
          className="btn btn-primary btn-sm m-2"
        >
          View2
        </div>
      </React.Fragment>
    );
  }
}

export default SearchBar;
