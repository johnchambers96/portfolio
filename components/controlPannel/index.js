import TabBar from "./tabBar";
import { ControlContainer } from "../../styles/controlPannel";
import { useState } from "react";

const Content = (props) => {
  const { activeTab } = props;
  switch (activeTab) {
    case "Style":
      return <div>{activeTab}</div>;
    case "Players":
      return <div>{activeTab}</div>;
    default:
      return null;
  }
};

const ControlPannel = (props) => {
  const tabSelections = ["Style", "Players"];
  const [activeTab, setActiveTab] = useState(tabSelections[0]);

  return (
    <ControlContainer>
      <TabBar
        tabSelections={tabSelections}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Content activeTab={activeTab} />
    </ControlContainer>
  );
};

export default ControlPannel;
