const express = require("express");
const cors = require("cors");
const connection = require("./database/connection");

const clubRouter = require("./routes/clubRouter");
const studentRouter = require("./routes/studentRouter");

const port = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/clubs", clubRouter);
app.use("/students", studentRouter);

app.listen(port, async () => {
    console.log(`Server running on port ${port}`);

    connection.connectToServer();
});