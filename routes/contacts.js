const express = require("express");
const router = express.Router();
const usersController = require("../controllers/contacts");

// GET requests for all contacts and a single contact:
router.get("/", usersController.getAll);
router.get("/:id", usersController.getSingle);

// POST request:
router.post("/", usersController.createContact);

// PUT request:
router.put("/:id", usersController.updateContact);

// DELETE request:
router.delete("/:id", usersController.deleteContact);

module.exports = router;
