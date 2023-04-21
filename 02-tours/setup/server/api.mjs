import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/data", async (req, res) => {
  try {
    const response = await fetch("https://course-api.com/react-tours-project");
    const data = await response.json();
    
    console.log(res.json(data))
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
