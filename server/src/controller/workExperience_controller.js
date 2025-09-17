import { WorkExperience } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getWorkExperience = async (req, res) => {
  try {
    const workExperience = await WorkExperience.findAll();
    res.status(200).json(workExperience);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch work experience data" });
  }
};

export const createWorkExperience = async (req, res) => {
  try {
    const newWork = await WorkExperience.create(req.body);
    res.status(201).json({
      message: "Success, you added a new work experience!",
      data: newWork,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create work experience!" });
  }
};

export const updateWorkExperience = async (req, res) => {
  try {
    const updateWork = await WorkExperience.findByPk(req.params.id);
    if (!updateWork)
      return res.status(404).json({ error: "Work experience not found!" });

    await updateWork.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateWork,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.staus(500).json({ error: "Faild to update work experience!" });
  }
};

export const deleteWorkExperience = async (req, res) => {
  try {
    const destroyWork = await WorkExperience.findByPk(req.params.id);
    if (!destroyWork)
      return res.status(404).json({ error: "Work experience not found!" });

    await destroyWork.destroy();
    res.status(200).json({
      message: "RIP Work experience!",
      data: destroyWork,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete work experience!" });
  }
};
