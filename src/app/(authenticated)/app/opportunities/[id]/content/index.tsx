import { Tabs, Tab } from "react-bootstrap";
import Basic from "./basic";
import PrimaryInfo from "./primary-information";
import Notes from "./notes";

const Content = () => {
  return (
    <Tabs
      defaultActiveKey="tab1"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="tab1" title="Basic">
        <Basic />
      </Tab>
      <Tab eventKey="tab2" title="Primary Info">
        <PrimaryInfo />
      </Tab>
      <Tab eventKey="tab3" title="Notes">
        <Notes />
      </Tab>
      <Tab eventKey="tab4" title="Characteristics">
        <div>Characteristics</div>
      </Tab>
      <Tab eventKey="tab5" title="Contact Info">
        <div>Contact Info</div>
      </Tab>
      <Tab eventKey="tab6" title="Financial Info">
        <div>Financial Info</div>
      </Tab>
      <Tab eventKey="tab7" title="Diligence Period">
        <div>Diligence Period</div>
      </Tab>
    </Tabs>
  );
};

export default Content;
