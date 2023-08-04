import React from "react";
import EngagementMessagesOverTime from "./Components/EngagementMessagesOverTime";
import channels from "./Data/Channels";
import messageCountList from "./Data/MessageCountList";

const App = () => {
 

  return (
    <div>
      <EngagementMessagesOverTime
        messageCountList={messageCountList}
        channels={channels}
      />
    </div>
  );
};

export default App;
