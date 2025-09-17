import { Today } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getTodayText = async (req, res) => {
  try {
    const todayText = await Today.findAll();
    res.status(200).json(todayText);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch today-text" });
  }
};

export const createTodayText = async (req, res) => {
  try {
    const newTodayText = await Today.create(req.body);
    res.status(201).json({
      message: "Success, you added a new today-text!",
      data: newTodayText,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create today-text!" });
  }
};

export const updateTodayText = async (req, res) => {
  try {
    const updateToday = await Today.findByPk(req.params.id);
    if (!updateToday)
      return res.status(404).json({ error: "Today text not found!" });

    await updateToday.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateToday,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update today-text!" });
  }
};

export const deleteTodayText = async (req, res) => {
  try {
    const destroyTodayText = await Today.findByPk(req.params.id);
    if (!destroyTodayText)
      return res.status(404).json({ error: "Today-text not found!" });

    await destroyTodayText.destroy();
    res.status(200).json({
      message: "RIP today-text!",
      data: destroyTodayText,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete today-text!" });
  }
};
