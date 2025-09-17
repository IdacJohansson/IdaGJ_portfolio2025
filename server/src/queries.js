import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

export const skillsMapQuery = async () => {
  const skillsMap = `
    SELECT 
    sm.id AS id,
    s.name AS skill_name,
    c.name AS category_name,
    sc.name AS subcategory_name
    FROM skills_map sm
    LEFT JOIN skills s 
    ON sm.skill_id = s.id
    LEFT JOIN skills_categories c 
    ON sm.category_id = c.id
    LEFT JOIN skills_subcategories sc 
    ON sm.subcategory_id = sc.id
    ORDER BY c.name, sc.name, s.name;`;

  const result = await pool.query(skillsMap);
  return result.rows;
};
