import { SkillsCategories } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";


export const getSkillCategory = async (req, res) => {
  try {
    const skill = await SkillsCategories.findAll();
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skills categories data" });
  }
};

export const createSkillCategory = async (req, res) => {
  try {
    const newSkillCategory = await SkillsCategories.create(req.body);
    res.status(201).json({
      message: "Success, you added a new skill category!",
      data: newSkillCategory,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new skill category!" });
  }
};

export const updateSkillCategory = async (req, res) => {
  try {
    const updateSkillCat = await SkillsCategories.findByPk(req.params.id);
    if (!updateSkillCat)
      return res.status(404).json({ error: "Skill category not found!" });

    await updateSkillCat.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateSkillCat,
      updatedAt: setDateAndTime()
    });
  } catch (error) {
    res.staus(500).json({ error: "Faild to update skill category!" });
  }
};

export const deleteSkillCategory = async (req, res) => {
  try {
    const destroySkillCat = await SkillsCategories.findByPk(req.params.id);
    if (!destroySkillCat)
      return res.status(404).json({ error: "Skill category not found!" });

    await destroySkillCat.destroy();
    res.status(200).json({
      message: "RIP skill category!",
      data: destroySkillCat,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete skill category!" });
  }
};
