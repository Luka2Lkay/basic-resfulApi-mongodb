const express = require("express");
const bookRoutes = require("./routes/bookRoutes");
require("./config/config")

const app = express();
const port = 3000;

app.use(express.json());
app.use("/books", bookRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
