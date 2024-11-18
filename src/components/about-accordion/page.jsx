import Accordion from 'react-bootstrap/Accordion';
import './page.css'

function AboutAccordion() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" data-aos="fade-up"
                data-aos-duration="3000" >
                <Accordion.Header>1. Fast Charging Capabilities</Accordion.Header>
                <Accordion.Body>
                    Experience rapid charging with our state-of-the-art Level 3 DC fast chargers for quick and convenient top-ups.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" data-aos="fade-up"
                data-aos-duration="3000">
                <Accordion.Header>2. Smart Charging Solutions</Accordion.Header>
                <Accordion.Body>
                    Experience rapid charging with our state-of-the-art Level 3 DC fast chargers for quick and convenient top-ups.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" data-aos="fade-up"
                data-aos-duration="3000">
                <Accordion.Header>3. Flexible Charging Plans</Accordion.Header>
                <Accordion.Body>
                    Experience rapid charging with our state-of-the-art Level 3 DC fast chargers for quick and convenient top-ups.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AboutAccordion