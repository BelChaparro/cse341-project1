const mongodb = require("../db/connect");
//Get unique ID created by MongoDb:
const ObjectId = require("mongodb").ObjectId;

// getAll async function:
const getAll = async (req, res) => {
  const result = await mongodb.getDatabase().db().collection("contacts").find();
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts).bodyParser;
  });
};

// getSingle async function:
const getSingle = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection("contacts")
    .find({ _id: contactId });
  result.toArray().then((contacts) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(contacts[0]);
  });
};

// createContact async function:
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDatabase().db().collection("contacts").insertOne({ contact });

  if ( response.createCount > 0) {
    res.status(200).send();
  } else {
    res.status(500).json(response.error || "There has been an error while creating the contact.")
  }
};

// updateContact async function:
const updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
      };
      const response = await mongodb.getDatabase().db().collection("contacts").replaceOne({ _id: contactId }, contact);
    
      if ( response.acknowledge > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(response.error || "There has been an error while updating the contact.")
      }
};

// deleteContact async function:
const deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection("contacts").deleteOne({ _id: contactId }, contact);
    
    if ( response.deleteCount > 0) {
        res.status(200).send();
      } else {
        res.status(500).json(response.error || "There has been an error while deleting the contact.")
      }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact,
};
