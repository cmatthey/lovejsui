import React, { Component } from "react";

class ReportFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onDownload}
          className="btn btn-primary btn-sm m-2"
        >
          Download
        </button>
        <button
          onClick={this.props.onExport}
          className="btn btn-primary btn-sm m-2"
        >
          Export
        </button>
      </React.Fragment>
    );
  }
}

export default ReportFooter;
