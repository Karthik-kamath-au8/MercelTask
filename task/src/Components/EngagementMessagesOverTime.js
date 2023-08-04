// EngagementMessagesOverTime.js
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import EngagementHelper from "./EnganementHelper";

const EngagementMessagesOverTime = ({ messageCountList, channels }) => {
  // Get the chart options using EngagementHelper
  const options = EngagementHelper.engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
