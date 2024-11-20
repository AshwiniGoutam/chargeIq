import Accordion from "react-bootstrap/Accordion";
import "./page.css";

function AboutAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" data-aos="fade-up" data-aos-duration="3000">
        <Accordion.Header>
          1. Comprehensive Charger Discovery and Charging Platform
        </Accordion.Header>
        <Accordion.Body>
          Locate, Charge, and Pay & Go with ease using our intuitive platform
          that connects you to chargers anytime, anywhere.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" data-aos="fade-up" data-aos-duration="3000">
        <Accordion.Header>
          2. EV Charging Station Management Platform
        </Accordion.Header>
        <Accordion.Body>
          Optimize and streamline station operations with intelligent tools
          designed to enhance efficiency and user satisfaction.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" data-aos="fade-up" data-aos-duration="3000">
        <Accordion.Header>3. EV Fleet Management Solutions</Accordion.Header>
        <Accordion.Body>
          Maximize fleet performance with real-time tracking, analytics, and
          tailored charging strategies to keep your vehicles on the move.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AboutAccordion;
