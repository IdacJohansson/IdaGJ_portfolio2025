import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

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
                <Card className="custom-card mb-5">
                  <a href={item.http} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={item.picture}
                      width={500}
                      height={500}
                      alt="project image"
                      className="img-style img-wrapper"
                    />
                  </a>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                  <a
                    className="icon-link icon-link-hover mt-2 m-3"
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source code on Github
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </Card>
              </Col>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </Row>
      </Card>
    </main>
  );
}
