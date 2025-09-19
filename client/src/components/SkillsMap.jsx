import { useEffect, useState } from "react";
import { getMappedSkills } from "../service/skillsService.js";
import Spinner from "react-bootstrap/Spinner";

export default function SkillsMap() {
  const [mappedSkills, setMappedSkills] = useState(null);

  const categoryOrder = [
    "Backend Development",
    "Frontend Development",
    "Databases",
    "Programming Languages",
    "DevOps",
    "Security",
    "Build Tools",
    "Testing and QA",
    "Patterns and Architecture",
    "Methodologies and Other",
  ];

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsMapData = await getMappedSkills();

        const groupedData = skillsMapData.data.reduce((acc, item) => {
          const { category_name, subcategory_name, skill_name } = item;

          if (!acc[category_name]) {
            acc[category_name] = {};
          }
          const subcategory = subcategory_name || "General";

          if (!acc[category_name][subcategory]) {
            acc[category_name][subcategory] = [];
          }

          acc[category_name][subcategory].push(skill_name);

          return acc;
        }, {});

        setMappedSkills(groupedData);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="skills-map container">
      {mappedSkills ? (
        <div className="categories d-flex flex-wrap justify-content-center">
          {categoryOrder.map(
            (category) =>
              mappedSkills[category] && (
                <div key={category} className="category flex-fill custom-col">
                  <h3 className="category-title">{category}</h3>
                  <div className="groups">
                    {Object.entries(mappedSkills[category]).map(
                      ([group, skills]) => (
                        <div key={group} className="skill-box">
                          {group !== "General" && (
                            <h4 className="group-title">{group}</h4>
                          )}
                          <ul>
                            {skills.map((skill, i) => (
                              <li key={i}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )
          )}
        </div>
      ) : (
        <Spinner animation="border" role="status" variant="dark">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}
