import { Projects } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Projects.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch project" });
  }
};

export const createProjects = async (req, res) => {
  try {
    const newProjects = await Projects.create(req.body);
    res.status(201).json({
      message: "Success, you added a new project!",
      data: newProjects,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create project!" });
  }
};

export const updateProjects = async (req, res) => {
  try {
    const updateProjects = await Projects.findByPk(req.params.id);
    if (!updateProjects)
      return res.status(404).json({ error: "Project not found!" });

    await updateProjects.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateProjects,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update project!" });
  }
};

export const deleteProjects = async (req, res) => {
  try {
    const destroyProjects = await Projects.findByPk(req.params.id);
    if (!destroyProjects)
      return res.status(404).json({ error: "Project not found!" });

    await destroyProjects.destroy();
    res.status(200).json({
      message: "RIP project!",
      data: destroyProjects,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete project!" });
  }
};