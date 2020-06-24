class ReportReq {
  constructor() {
    this.axios = require("axios");
    this.axios.defaults.baseURL = process.env.BACKEND_URL; //dotenv and this doesn't work
    this.axios.defaults.baseURL = "http://localhost:3080/api";
  }
  getReport = async (screenName, displayName, reportTime) => {
    try {
      const response = await this.axios.get(`/tweet/${screenName}`, {
        params: {
          display_name: displayName,
          report_time: reportTime,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      console.log(error.request);
      return { error: error };
    }
  };
}

export default ReportReq;
