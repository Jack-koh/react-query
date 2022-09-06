const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const limit = 20;
const offset = 20;

const todos = Array.from(new Array(100), (v, i) => ({
  id: i,
  title: "mock data" + i,
}));

app.get("/", function (req, res) {
  res.json({ name: "Hello World" });
});

app.get("/todos", function (req, res) {
  const { offset, limit } = req.query;
  const data = todos.slice(+offset, +offset + +limit);
  return res.json(data);
});

app.get("/todos/post", function (req, res) {
  todos.push({ id: todos.length + 1, title: "get" + todos.length + 1 });
  return res.json(todos);
});

// app.get("/error", function (req, res) {
//   res.status(500).json({ api_response: { result_code: "EEEE" } });
// });

app.listen(5000);
