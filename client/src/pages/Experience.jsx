import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import "animate.css";

import Header from "../components/Header";
import SkillsMap from "../components/SkillsMap.jsx";

import { getWorkExperiences } from "../service/workExperienceService";
import { getDevelopmentExperience } from "../service/developmentExperienceService.js";
import { getEducation } from "../service/educationService.js";
import { sortYearDesc } from "../utils/sortYear.js";

export default function experience() {
  const [workExperience, setWorkExperience] = useState(null);
  const [developmentExperience, setDevelopmentExperience] = useState(null);
  const [education, setEducation] = useState(null);

  useEffect(() => {
    const fetchWorkExperiences = async () => {
      try {
        const workData = await getWorkExperiences();
        const sortedWorkData = sortYearDesc(workData);
        setWorkExperience(sortedWorkData);
      } catch (error) {
        console.error("Error fetching work experiences:", error);
      }
    };
    fetchWorkExperiences();
  }, []);

  useEffect(() => {
    const fetchDevelopmentExperience = async () => {
      try {
        const devData = await getDevelopmentExperience();
        const sortedDevData = sortYearDesc(devData);
        setDevelopmentExperience(sortedDevData);
      } catch (error) {
        console.error("Error fetching work experiences:", error);
      }
    };
    fetchDevelopmentExperience();
  }, []);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const eduData = await getEducation();
        const sortedEduData = sortYearDesc(eduData);
        setEducation(sortedEduData);
      } catch (error) {
        console.error("Error fetching education data:", error);
      }
    };
    fetchEducation();
  }, []);

  return (
    <main className="d-flex flex-column justify-content-center align-items-center mt-5">
      <Header title="Experience" />

      <Card className="container-fluid container-size card-style d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <Card.Body className="col-12 col-md-10">
          {/* Work experience */}
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Work experience
          </Card.Title>
          <Row className="justify-content-center align-items-center mb-1">
            <Col md={4} xs={4} className="mb-3">
              <Card.Title className="sub-title">Title</Card.Title>
            </Col>
            <Col md={4} xs={4} className="mb-3">
              <Card.Title className="sub-title">Company</Card.Title>
            </Col>
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period</Card.Title>
            </Col>
          </Row>
          {workExperience ? (
            workExperience.map((item) => (
              <Row
                key={item.id}
                className="justify-content-center align-items-center mb-3"
              >
                <Col md={4} xs={4} className="mb-3">
                  <Card.Text className="card-text">{item.title}</Card.Text>
                </Col>
                <Col md={4} xs={4} className="mb-3">
                  <Card.Text className="card-text">{item.company}</Card.Text>
                </Col>
                <Col md={2} xs={3} className="mb-3">
                  <Card.Text className="card-text">{item.period}</Card.Text>
                </Col>
              </Row>
            ))
          ) : (
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Card.Body>
        <div className="title-underline"></div>

        {/* Education */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Education
          </Card.Title>
          <Row className="justify-content-center align-items-center">
            <Col md={4} xs={4} className="mb-3">
              <Card.Title className="sub-title">Degree:</Card.Title>
            </Col>
            <Col md={4} xs={4} className="mb-3">
              <Card.Title className="sub-title">Institution:</Card.Title>
            </Col>
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period:</Card.Title>
            </Col>
          </Row>
          {education ? (
            education.map((item) => (
              <Row
                key={item.id}
                className="justify-content-center align-items-center mb-3 "
              >
                <Col md={4} xs={4} className="mb-3">
                  <Card.Text className="card-text-xs">{item.degree}</Card.Text>
                </Col>
                <Col md={4} xs={4} className="mb-3">
                  <Card.Text className="card-text-xs">
                    {item.institution}
                  </Card.Text>
                </Col>
                <Col md={2} xs={3} className="mb-3">
                  <Card.Text className="card-text-xs">{item.period}</Card.Text>
                </Col>
              </Row>
            ))
          ) : (
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Card.Body>

        <div className="title-underline"></div>

        {/* Development experience */}
        <Card.Body className="col-12 col-md-10">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Development experience
          </Card.Title>
          <Row className="justify-content-center align-items-center ">
            <Col md={4} xs={4} className="mb-3">
              <Card.Title className="sub-title">Title:</Card.Title>
            </Col>
            <Col md={4} xs={4} className="mb-3">
              <Card.Title className="sub-title">Company:</Card.Title>
            </Col>
            <Col md={2} xs={3} className="mb-3">
              <Card.Title className="sub-title">Period:</Card.Title>
            </Col>
          </Row>
          {developmentExperience ? (
            developmentExperience.map((item) => (
              <Row
                key={item.id}
                className="justify-content-center align-items-center mb-3 "
              >
                <Col md={4} xs={4} className="mb-3">
                  <Card.Text className="card-text-xs">{item.title}</Card.Text>
                </Col>
                <Col md={4} xs={4} className="mb-3">
                  <Card.Text className="card-text-xs">{item.company}</Card.Text>
                </Col>
                <Col md={2} xs={3} className="mb-3">
                  <Card.Text className="card-text-xs">{item.period}</Card.Text>
                </Col>
              </Row>
            ))
          ) : (
            <Spinner animation="border" role="status" variant="dark">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
        </Card.Body>
        <div className="title-underline"></div>

        {/* Technical Skills */}
        <Card.Body className="col-12 col-md-12">
          <Card.Title className="titel-experience d-flex justify-content-center align-items-center mb-5">
            Technical skills
          </Card.Title>
          <SkillsMap />
        </Card.Body>
      </Card>
    </main>
  );
}
