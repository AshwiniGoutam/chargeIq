import Accordion from 'react-bootstrap/Accordion';
import './page.css'

function FaqAccordion() {
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0" data-aos="fade-up"
                        data-aos-duration="3000" >
                        <Accordion.Header>How does the charging process work?</Accordion.Header>
                        <Accordion.Body>
                            Experience rapid charging with our state-of-the-art Level 3 DC fast chargers for quick and convenient top-ups.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" data-aos="fade-up"
                        data-aos-duration="3000">
                        <Accordion.Header>How do I find the nearest charging station?</Accordion.Header>
                        <Accordion.Body>
                            Experience rapid charging with our state-of-the-art Level 3 DC fast chargers for quick and convenient top-ups.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" data-aos="fade-up"
                        data-aos-duration="3000">
                        <Accordion.Header>Can I charge multiple vehicles simultaneously?</Accordion.Header>
                        <Accordion.Body>
                            Experience rapid charging with our state-of-the-art Level 3 DC fast chargers for quick and convenient top-ups.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <Accordion defaultActiveKey='4'>
                    <Accordion.Item eventKey="4" data-aos="fade-up"
                        data-aos-duration="3000" >
                        <Accordion.Header>Are there different charging speeds available?</Accordion.Header>
                        <Accordion.Body>
                            Experience rapid charging with our state-of-the-art Level 3 DC fast chargers for quick and convenient top-ups.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" data-aos="fade-up"
                        data-aos-duration="3000">
                        <Accordion.Header>What payment methods are accepted?</Accordion.Header>
                        <Accordion.Body>
                            Experience rapid charging with our state-of-the-art Level 3 DC fast chargers for quick and convenient top-ups.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6" data-aos="fade-up"
                        data-aos-duration="3000">
                        <Accordion.Header>What types of connectors are supported?</Accordion.Header>
                        <Accordion.Body>
                            Experience rapid charging with our state-of-the-art Level 3 DC fast chargers for quick and convenient top-ups.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}

export default FaqAccordion