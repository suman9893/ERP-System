import express from "express";
const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hellow");
});

app.listen(port, () => {
  console.log(`Sever running on ${port}`);
});
