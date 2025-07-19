const express = require("express");
const app = express();
const personRouter = require("./routes/person");
const indexRouter = require("./routes/index");

app.use(express.json());

app.use("/api/person", personRouter);
app.use(express.static("public"));
app.use("/api", indexRouter);

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 1234;

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.send("Welcome to my Node API");
});

app.listen(port, host, () => {
  console.log(`Server runnig at http://${host}:${port}`);
});
