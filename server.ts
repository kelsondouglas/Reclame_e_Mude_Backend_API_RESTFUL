import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.json({ message: "Hello Worl" });
});

app.listen(3000, () => {
  console.log("Server is runnning");
});
