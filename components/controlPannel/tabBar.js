import { TabBarContainer, TabBarItem } from "../../styles/controlPannel";

const TabBar = ({ tabSelections, activeTab, setActiveTab }) => {
  return (
    <TabBarContainer>
      {tabSelections.map((item, index) => (
        <TabBarItem
          key={index}
          className={item === activeTab && "active"}
          onClick={() => setActiveTab(item)}
        >
          {item}
        </TabBarItem>
      ))}
    </TabBarContainer>
  );
};

export default TabBar;
