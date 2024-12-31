import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ice-tea", (req, res) => {
  res.send("server is busy");
});

app.get("/twitter", (req, res) => {
  res.send("twitter");
});

app.listen(port, () => {
  console.log(`server is running at port:${port}`);
});
