import { DevelopmentExperience } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getDevelopmentExperience = async (req, res) => {
  try {
    const devEx = await DevelopmentExperience.findAll();
    res.status(200).json(devEx);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch education data" });
  }
};

export const createDevelopmentExperience = async (req, res) => {
  try {
    const newDevEx = await DevelopmentExperience.create(req.body);
    res.status(201).json({
      message: "Success, you added a new development experience!",
      data: newDevEx,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create development experience!" });
  }
};

export const updateDevelopmentExperience = async (req, res) => {
  try {
    const updateDevEx = await DevelopmentExperience.findByPk(req.params.id);
    if (!updateDevEx)
      return res
        .status(404)
        .json({ error: "Development experience not found!" });

    await updateDevEx.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateDevEx,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.staus(500).json({ error: "Faild to update development experience!" });
  }
};

export const deleteDevelopmentExperience = async (req, res) => {
  try {
    const destroyDevEx = await DevelopmentExperience.findByPk(req.params.id);
    if (!destroyDevEx)
      return res
        .status(404)
        .json({ error: "Development experience not found!" });

    await destroyDevEx.destroy();
    res.status(200).json({
      message: "RIP development experience!",
      data: destroyDevEx,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete development experience!" });
  }
};
