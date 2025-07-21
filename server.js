const express = require("express");
const app = express();

const userRouter = require("./routes/user");
const indexRouter = require("./routes/index");

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api", indexRouter);
app.use(express.static("public"));

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 1234;

app.listen(port, host, () => {
  console.log(`Server runnig at http://${host}:${port}`);
});
