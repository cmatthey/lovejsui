import React, { Component } from "react";
import DataGrid from "react-data-grid";
import "react-data-grid/dist/react-data-grid.css";

class Table extends Component {
  state = {
    columns: [
      { key: "id", name: "#" },
      { key: "display_name", name: "Name", editable: true },
      { key: "screen_name", name: "Screen Name", editable: true },
      { key: "link", name: "Link", editable: true },
      {
        key: "favorite_count",
        name: "favorite_count",
        editable: true,
      },
      { key: "retweet_count", name: "retweet_count", editable: true },
      { key: "lang", name: "lang", editable: true },
      { key: "text", name: "text", editable: true },
    ],
  };
  render() {
    return (
      <DataGrid
        columns={this.state.columns}
        rows={this.props.tUser.data}
        isScrolling={true}
      ></DataGrid>
    );
  }
}

export default Table;
