import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";

import Header from "../components/Header";

import "animate.css";

import { getProject } from "../service/projectService";

export default function Projects() {
  const [projectText, setProjectText] = useState(null);

  useEffect(() => {
    const fetchProjectText = async () => {
      try {
        const proData = await getProject();
        setProjectText(proData);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchProjectText();
  }, []);

  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Header title="Projects" />

      <Card className="container-fluid container-size card-style d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <Row xs={1} md={2} className="g-4 mt-3">
          {projectText ? (
            projectText.map((item) => (
              <Col key={item.id}>
                <Card className="custom-card mb-3">
                  <a
                    href={item.http}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="stretched-link"
                  >
                    <Image
                      src={item.picture}
                      width={400}
                      height={400}
                      alt="project image"
                      className="img-wrapper"
                    />
                  </a>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
                <Card.Link
                  className="icon-link icon-link-hover m-1 mb-3"
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View source code on Github
                  <i className="bi bi-arrow-right"></i>
                </Card.Link>
              </Col>
            ))
          ) : (
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Row>
      </Card>
    </main>
  );
}
