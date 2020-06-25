import React, { Component } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils from "react-day-picker/moment";
import "moment/locale/en-ca";

class SearchBar extends Component {
  state = { screenName: "", displayName: "", day: null };

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
        <DayPicker
          onDayClick={(day) => this.setState({ day })}
          localeUtils={MomentLocaleUtils}
          locale="en-ca"
        />
        <div
          onClick={() => {
            this.props.onSearch(
              this.state.screenName,
              this.state.displayName,
              this.state.day
            );
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
