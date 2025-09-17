import { SkillsMap } from "../model/index.js";
import { skillsMapQuery } from "../queries.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getSkillsMap = async (req, res) => {
  try {
    const skillsMap = await SkillsMap.findAll();
    res.status(200).json(skillsMap);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills map data" });
  }
};

export const getSkillsMapQuery = async (req, res) => {
  try {
    const skillsMapData = await skillsMapQuery();
    res
      .status(200)
      .json({
        message: "Mapped data:",
        data: skillsMapData,
        updatedAt: setDateAndTime(),
      });
  } catch (error) {
    console.error("Error fetching skills map data:", error);
    res.status(500).json({ error: "Failed to fetch skills map data" });
  }
};
