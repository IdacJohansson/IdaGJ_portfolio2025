import express from "express";
import cors from "cors";

import skills_routes from "./src/routes/skills_routes.js";
import skillsCategories_routes from "./src/routes/skillsCategories_routes.js";
import skillsMap_routes from "./src/routes/skillsMap_routes.js";
import education_routes from "./src/routes/education_routes.js";
import workExperience_routes from "./src/routes/workExperience_routes.js";
import developmentExperience_routes from "./src/routes/developmentExperience_routes.js";
import skillsSubcategories_routes from "./src/routes/skillsSubcategories_routes.js";
import about_routes from "./src/routes/aboute_routes.js";
import today_routes from "./src/routes/today_routes.js";
import projects_routes from "./src/routes/projects_routes.js";
import contact_routes from "./src/routes/contact_routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/skills", skills_routes);

app.use("/api/skillsCategories", skillsCategories_routes);

app.use("/api/skillsSubcategories", skillsSubcategories_routes);

app.use("/api/skillsMap", skillsMap_routes);

app.use("/api/education", education_routes);

app.use("/api/workExperience", workExperience_routes);

app.use("/api/developmentExperience", developmentExperience_routes);

app.use("/api/about", about_routes);

app.use("/api/today", today_routes);

app.use("/api/projects", projects_routes);

app.use("/api/contact", contact_routes);

export default app;
