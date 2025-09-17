import { Skills } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getSkills = async (req, res) => {
  try {
    const skill = await Skills.findAll();
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills data" });
  }
};

export const createSkill = async (req, res) => {
  try {
    const newSkill = await Skills.create(req.body);
    res.status(201).json({
      message: "Success, you added a new skill!",
      data: newSkill,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new skill!" });
  }
};

export const updateSkill = async (req, res) => {
  try {
    const updateSkill = await Skills.findByPk(req.params.id);
    if (!updateSkill)
      return res.status(404).json({ error: "Skill not found!" });

    await updateSkill.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateSkill,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.staus(500).json({ error: "Faild to update skill!" });
  }
};

export const deleteSkill = async (req, res) => {
  try {
    const destroySkill = await Skills.findByPk(req.params.id);
    if (!destroySkill)
      return res.status(404).json({ error: "Skill not found!" });

    await destroySkill.destroy();
    res.status(200).json({
      message: "RIP skill!",
      data: destroySkill,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete skill!" });
  }
};
