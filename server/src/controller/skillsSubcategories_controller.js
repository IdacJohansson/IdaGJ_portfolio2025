import { SkillsSubcategories } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getSkillSubcategories = async (req, res) => {
  try {
    const skill = await SkillsSubcategories.findAll();
    res.status(200).json(skill);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch skill subcategories data" });
  }
};

export const createSkillSubcategory = async (req, res) => {
  try {
    const newSkillSubcategory = await SkillsSubcategories.create(req.body);
    res.status(201).json({
      message: "Success, you added a new skill subcategory!",
      data: newSkillSubcategory,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create a new skill subcategory!" });
  }
};

export const updateSkillSubcategory = async (req, res) => {
  try {
    const updateSkillSub = await SkillsSubcategories.findByPk(req.params.id);
    if (!updateSkillSub)
      return res.status(404).json({ error: "Skill subcategory not found!" });

    await updateSkillSub.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateSkillSub,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.staus(500).json({ error: "Faild to update skill subcategory!" });
  }
};

export const deleteSkillSubcategory = async (req, res) => {
  try {
    const destroySkillSub = await SkillsSubcategories.findByPk(req.params.id);
    if (!destroySkillSub)
      return res.status(404).json({ error: "Skill subcategory not found!" });

    await destroySkillSub.destroy();
    res.status(200).json({
      message: "RIP skill subcategory!",
      data: destroySkillSub,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete skill subcategory!" });
  }
};
