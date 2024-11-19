import Accordion from "react-bootstrap/Accordion";
import "./page.css";

function FaqAccordion() {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <Accordion defaultActiveKey="0">
          <Accordion.Item
            eventKey="0"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>What is ChargIQ?</Accordion.Header>
            <Accordion.Body>
              ChargIQ is a one-stop app for all your EV charging needs. It helps
              you locate, access, and pay at chargepoints across major networks,
              plan trips, and monitor charging sessions seamlessly.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              Is ChargIQ compatible with all EVs?
            </Accordion.Header>
            <Accordion.Body>
              Yes, ChargIQ works with most EVs, including two-wheelers and
              four-wheelers, across various connector types and charging
              networks.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              How can I find a chargepoint near me?
            </Accordion.Header>
            <Accordion.Body>
              Use the app to search for available chargepoints nearby based on
              your location, plug type, and preferences.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="11"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              What if I encounter an issue with a chargepoint?
            </Accordion.Header>
            <Accordion.Body>
              Use the app to report issues or contact the customer support team
              for assistance.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="12"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              Are new features being added to the app?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we’re constantly improving ChargIQ. Features like review and
              check-in at chargepoints are coming soon!
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="13"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>How do I update my app?</Accordion.Header>
            <Accordion.Body>
              Updates are available through your device’s app store. Turn on
              auto-updates to stay current with the latest features and
              improvements.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="14"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>Still Have Questions?</Accordion.Header>
            <Accordion.Body>
              Reach out to our support team directly through the app or email us
              at support@chargiq.in. We’re here to help!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6">
        <Accordion defaultActiveKey="4">
          <Accordion.Item
            eventKey="4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              Can I access chargepoints from different brands?
            </Accordion.Header>
            <Accordion.Body>
              Yes, ChargIQ supports roaming-enabled access, allowing you to use
              chargepoints from multiple networks with a single app.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              How do I know if a chargepoint is available?
            </Accordion.Header>
            <Accordion.Body>
              The app provides real-time status updates, including availability,
              verified tariffs, and station reviews.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="6"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              What payment methods are supported?
            </Accordion.Header>
            <Accordion.Body>
              ChargIQ accepts payments via UPI, debit/credit cards, and ChargIQ
              Wallet for secure and hassle-free transactions.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="7"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>
              Can I monitor my charging session?
            </Accordion.Header>
            <Accordion.Body>
              Yes, the app lets you monitor your charging progress and notifies
              you once the session is complete.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="8"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>Can I set a charging limit?</Accordion.Header>
            <Accordion.Body>
              Absolutely! You can set limits by percentage, duration, or amount
              to suit your needs.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="9"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>How does the trip planner work?</Accordion.Header>
            <Accordion.Body>
              Input your source, destination, and starting state of charge
              (SoC). ChargIQ’s AI-powered trip planner suggests optimal routes
              and charging stops to save time and costs.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item
            eventKey="10"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Accordion.Header>Can I customize my trip plan?</Accordion.Header>
            <Accordion.Body>
              Yes, you can adjust variables like vehicle type, battery capacity,
              and preferences for a personalized charging itinerary.
            </Accordion.Body>
          </Accordion.Item>


        </Accordion>
      </div>
    </>
  );
}

export default FaqAccordion;
