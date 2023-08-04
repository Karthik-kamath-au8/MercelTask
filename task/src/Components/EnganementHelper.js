import Highcharts from "highcharts";

const EngagementHelper = {
  engagementMessageOverTimeChartOptions: (messageCountList, channels) => {
    // Step 1: Filter out channels with messages for more than one date
    const filteredChannels = channels.filter((channel) => {
      const channelDates = messageCountList
        .filter((entry) => entry.channelId === channel.value)
        .map((entry) => entry.timeBucket);
      const uniqueChannelDates = [...new Set(channelDates)];
      return uniqueChannelDates.length > 1;
    });

    // Step 2: Prepare the data in a format that Highcharts can consume
    const seriesData = filteredChannels.map((channel) => {
      const data = messageCountList
        .filter((entry) => entry.channelId === channel.value)
        .map((entry) => [new Date(entry.timeBucket).getTime(), parseInt(entry.count)]);

      return {
        name: channel.name,
        data: data,
      };
    });

    // Step 3: Generate the options object for Highcharts
    const options = {
      chart: {
        type: "line",
      },
      title: {
        text: "Engagement Messages Over Time",
      },
      xAxis: {
        type: "datetime",
        title: {
          text: "Date",
        },
      },
      yAxis: {
        title: {
          text: "Message Count",
        },
      },
      tooltip: {
        formatter: function () {
          return (
            "<b>" +
            this.series.name +
            "</b><br/>" +
            Highcharts.dateFormat("%Y-%m-%d", this.x) +
            "<br/>" +
            "Messages: " +
            this.y
          );
        },
      },
      series: seriesData,
    };

    return options;
  },
};

export default EngagementHelper;
