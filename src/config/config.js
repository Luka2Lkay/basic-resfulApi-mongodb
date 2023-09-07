require('dotenv').config()
const mongoose = require("mongoose");

const connection = mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {connection}