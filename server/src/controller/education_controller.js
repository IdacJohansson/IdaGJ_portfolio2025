import { Education } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getEducation = async (req, res) => {
  try {
    const education = await Education.findAll();
    res.status(200).json(education);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch education data" });
  }
};

export const createEducation = async (req, res) => {
  try {
    const newEducation = await Education.create(req.body);
    res.status(201).json({
      message: "Success, you added a new education!",
      data: newEducation,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create education!" });
  }
};

export const updateEducation = async (req, res) => {
  try {
    const updateEducation = await Education.findByPk(req.params.id);
    if (!updateEducation)
      return res.status(404).json({ error: "Education not found!" });

    await updateEducation.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateEducation,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.staus(500).json({ error: "Faild to update education!" });
  }
};

export const deleteEducation = async (req, res) => {
  try {
    const destroyEducation = await Education.findByPk(req.params.id);
    if (!destroyEducation)
      return res.status(404).json({ error: "Education not found!" });

    await destroyEducation.destroy();
    res.status(200).json({
      message: "RIP education!",
      data: destroyEducation,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete education!" });
  }
};
