import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getAboutText } from "../service/aboutService.js";
import { getTodayText } from "../service/todayService.js";

import TopHeader from "../components/TopHeader.jsx";
import { EncryptedText } from "../components/EncryptedText.jsx";
import { jsonString } from "../utils/data.js";
import EER from "../components/EER.jsx";

const Ida = () => {
  const [aboutText, setAboutText] = useState(null);
  const [todayText, setTodayText] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAboutText = async () => {
      try {
        const aboutData = await getAboutText();
        setAboutText(aboutData);
      } catch (error) {
        console.error("Failed to fetch about-text:", error);
      }
    };
    fetchAboutText();
  }, []);

  useEffect(() => {
    const fetchTodayText = async () => {
      try {
        const todayData = await getTodayText();
        setTodayText(todayData);
      } catch (error) {
        console.error("Failed to fetch today-text:", error);
      }
    };
    fetchTodayText();
  }, []);

  const handleNavigateToContact = () => {
    navigate("/contact");
  };

  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-3">
      <TopHeader />
      <Container fluid>
        <Row className="responsive-first-row d-flex mt-3 gap-3 justify-content-center">
          <Col className="hi-box">
            <Card.Body className="mb-4 text-center d-flex justify-content-center align-items-center">
              <EncryptedText text={jsonString} interval={5} />
            </Card.Body>
          </Col>
          <Col xs={6} className="img-box"></Col>

          <Col className="wrapper-col gap-3">
            <Col className="about-box p-3">
              <Card.Body>
                <Card.Title className="heading-dark mb-2">ABOUT</Card.Title>
                {aboutText ? (
                  aboutText.map((item) => (
                    <Card.Text key={item.id}>{item.paragraph}</Card.Text>
                  ))
                ) : (
                  <Spinner animation="border" role="status" variant="dark">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                )}
              </Card.Body>
            </Col>

            <Col className="social-box">
              <div className="d-flex flex-row justify-content-center align-items-center gap-5">
                <a
                  href="https://www.facebook.com/profile.php?id=735198102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links-wrapper facebook"
                >
                  <i className="bi bi-facebook fs-1 social-links"></i>
                </a>
                <a
                  href="https://se.linkedin.com/in/ida-grufman-johansson-45ab60b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links-wrapper linkedin"
                >
                  <i className="bi bi-linkedin fs-1 social-links"></i>
                </a>
                <a
                  href="https://github.com/IdacJohansson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-links-wrapper github"
                >
                  <i className="bi bi-github fs-1 social-links"></i>
                </a>
              </div>
            </Col>
          </Col>
        </Row>

        <Row className="responsive-second-row d-flex mb-4">
          <Col className="today-box p-3">
            <Card.Body>
              <Card.Title className="heading-dark mb-2">TODAY</Card.Title>
              {todayText ? (
                todayText.map((item) => (
                  <Card.Text key={item.id}>{item.paragraph}</Card.Text>
                ))
              ) : (
                <Spinner animation="border" role="status" variant="dark">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )}
              <Card.Link
                className="icon-link icon-link-hover mb-2"
                href="/experience"
              >
                Learn more about my experiences here
                <i className="bi bi-arrow-right"></i>
              </Card.Link>
            </Card.Body>
          </Col>
          <Col className="code-box">
            <Card.Body>
              <EER />
            </Card.Body>
          </Col>

          <Col xs={6} className="contact-box">
            <Card.Body
              className="d-flex flex-column justify-content-between"
              onClick={handleNavigateToContact}
            >
              <div className="d-flex justify-content-end">
                <i className="bi bi-arrow-up-right fs-2"></i>
              </div>
              <div className="d-flex justify-content-start">
                <Card.Text className="fs-1 fw-bold">Contact me</Card.Text>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Ida;
