import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "animate.css";
import Header from "../components/Header";

import { getContactText } from "../service/contactService";

export default function contact() {
  const [contactInfo, setContactInfo] = useState(null);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const contactData = await getContactText();
        setContactInfo(contactData);
      } catch (error) {
        console.error("Failed to fetch contact info:", error);
      }
    };
    fetchContactInfo();
  }, []);

  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Header title="Contact" />
      <Card className="container-fluid container-size card-style d-flex flex-column justify-content-center align-items-center mt-5">
        <Card.Body className="col-12 col-md-10">
          <Row className="justify-content-center align-items-center text-center mb-5 mt-5">
            <Col md={4} sm={4} xs={6} className="mb-3">
              <Card.Title className="sub-title">Phone:</Card.Title>
              {contactInfo ? (
                contactInfo.map((item) => (
                  <Card.Text key={item.id}>{item.phone}</Card.Text>
                ))
              ) : (
                <p>...</p>
              )}
            </Col>
            <Col md={4} sm={4} xs={6} className="mb-3 text-center">
              <Card.Title className="sub-title">Email:</Card.Title>
              {contactInfo ? (
                contactInfo.map((item) => (
                  <Card.Text className="card-text" key={item.id}>
                    {item.email}
                  </Card.Text>
                ))
              ) : (
                <p>...</p>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </main>
  );
}
