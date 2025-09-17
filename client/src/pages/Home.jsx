import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Header from "../components/Header";
import ImageIda from "../components/ImageIda";

import { getAboutText } from "../service/aboutService.js";
import { getTodayText } from "../service/todayService.js";

function home() {
  const [aboutText, setAboutText] = useState(null);
  const [todayText, setTodayText] = useState(null);

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

  return (
    <div>
      <main className="d-flex flex-column justify-content-center align-items-center mt-5">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-start">
            <ImageIda />
          </div>
          <Header titleLarge="Hi" title="I'm Ida" />
        </div>

        <Card className="container container-size card-style mt-5 mb-5">
          <Card.Body>
            <div className="row">
              {/* First column */}
              <div className="col-md-6 d-flex flex-column">
                <Card.Title className="title-previous-experience">
                  About me
                </Card.Title>
                {aboutText ? (
                  aboutText.map((item) => (
                    <Card.Text key={item.id}>{item.paragraph}</Card.Text>
                  ))
                ) : (
                  <p>...</p>
                )}
              </div>

              {/* Second column */}
              <div className="col-md-6 d-flex flex-column">
                <Card.Title className="title-previous-experience">
                  Today
                </Card.Title>
                {todayText ? (
                  todayText.map((item) => (
                    <Card.Text key={item.id}>{item.paragraph}</Card.Text>
                  ))
                ) : (
                  <p>...</p>
                )}
                <Card.Link
                  className="icon-link icon-link-hover mt-2"
                  href="/experience"
                >
                  Learn more about my experiences here
                  <i className="bi bi-arrow-right"></i>
                </Card.Link>
              </div>
            </div>
          </Card.Body>
        </Card>
      </main>
    </div>
  );
}

export default home;
