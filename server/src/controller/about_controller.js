import { About } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getAboutText = async (req, res) => {
  try {
    const aboutText = await About.findAll();
    res.status(200).json(aboutText);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch about-text" });
  }
};

export const createAboutText = async (req, res) => {
  try {
    const newAboutText = await About.create(req.body);
    res.status(201).json({
      message: "Success, you added a new about-text!",
      data: newAboutText,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create about-text!" });
  }
};

export const updateAboutText = async (req, res) => {
  try {
    const updateAboutText = await About.findByPk(req.params.id);
    if (!updateAboutText)
      return res.status(404).json({ error: "About-text not found!" });

    await updateAboutText.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateAboutText,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update about-text!" });
  }
};

export const deleteAboutText = async (req, res) => {
  try {
    const destroyAboutText = await About.findByPk(req.params.id);
    if (!destroyAboutText)
      return res.status(404).json({ error: "About-text not found!" });

    await destroyAboutText.destroy();
    res.status(200).json({
      message: "RIP about-text!",
      data: destroyAboutText,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete about-text!" });
  }
};
