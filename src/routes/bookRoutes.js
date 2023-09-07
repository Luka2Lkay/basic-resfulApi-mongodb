const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.post("/", bookController.createBook);
router.get("/", bookController.getAllBooks);
router.get("/:id", bookController.getOneBook);
router.put("/:id", bookController.updateOneBook);
router.delete("/:id", bookController.deleteOneBook);
router.delete("/", bookController.deleteAllBooks);

// Implement other routes (GET /books/:id, PUT /books/:id, DELETE /books/:id) here...

module.exports = router;
