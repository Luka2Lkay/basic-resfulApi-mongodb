const Book = require("../models/book");

exports.createBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndUpdate(id, req.body);
    const updatedBook = await Book.findById(id);
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteOneBook = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findByIdAndDelete(id);
    res
      .status(200)
      .send(`You have deleted a book with the title: ${book.title}`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteAllBooks = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.deleteMany();
    res.status(200).send(`You have deleted all the books!`);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
