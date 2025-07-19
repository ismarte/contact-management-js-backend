const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

exports.createContact = async (req, res) => {
  const { name, email, phone } = req.body;
  const newContact = new Contact({ name, email, phone });
  await newContact.save();
  res.status(201).json(newContact);
};

exports.updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
};
