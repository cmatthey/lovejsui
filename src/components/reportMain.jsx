import React, { Component } from "react";
import SearchBar from "./searchBar";
import Table from "./table";
import ReportFooter from "./reportFooter";
import ReportReq from "./service";
const reportReq = new ReportReq();

class Report extends Component {
  state = {
    tUser: {
      screeName: "",
      displayName: "",
      data: [],
      count: 0,
    },
  };
  handleSearch = async (screenName, displayName) => {
    const data = await reportReq.getReport(
      screenName,
      displayName,
      "2020-06-17T18:16:55.137Z"
    );
    let tUser = this.state.tUser;
    tUser.screenName = screenName;
    tUser.displayName = displayName;
    tUser.data = data;
    tUser.count = "error" in data ? 0 : data.lenth;
    this.setState({ tUser });
    console.log(this.state.tUser);
  };
  handleDownload = () => {
    console.log("Not yet implemented");
  };
  handleExport = () => {
    console.log("Not yet implemented");
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar onSearch={this.handleSearch} tUser={this.state.tUser} />
        <Table tUser={this.state.tUser} />
        <ReportFooter
          onDownload={this.handleDownload}
          onExport={this.handleExport}
          tUser={this.state.tUser}
        />
      </React.Fragment>
    );
  }
}

export default Report;
