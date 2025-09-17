import { Contact } from "../model/index.js";
import { setDateAndTime } from "../utils/dateAndTime.js";

export const getContactInfo = async (req, res) => {
  try {
    const contactInfo = await Contact.findAll();
    res.status(200).json(contactInfo);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch contact information" });
  }
};

export const createContactInfo = async (req, res) => {
  try {
    const newContactInfo = await Contact.create(req.body);
    res.status(201).json({
      message: "Success, you added new contact information!",
      data: newContactInfo,
      createdAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create contact information!" });
  }
};

export const updateContactInfo = async (req, res) => {
  try {
    const updateContactInfo = await Contact.findByPk(req.params.id);
    if (!updateContactInfo)
      return res.status(404).json({ error: "Contact information not found!" });

    await updateContactInfo.update(req.body);
    res.status(200).json({
      message: "Success, changes have been saved!",
      data: updateContactInfo,
      updatedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to update contact information!" });
  }
};

export const deleteContactInfo = async (req, res) => {
  try {
    const destroyContactInfo = await Contact.findByPk(req.params.id);
    if (!destroyContactInfo)
      return res.status(404).json({ error: "Contact information not found!" });

    await destroyContactInfo.destroy();
    res.status(200).json({
      message: "RIP contact information!",
      data: destroyContactInfo,
      deletedAt: setDateAndTime(),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete contact information!" });
  }
};
