const express = require("express");
const latestVideoApi = require("./api/testing");

const app = express();

app.get("/", async (req, res) => {
   try {
      await latestVideoApi(req, res);
   } catch (error) {
      console.error("Error handling request:", error);
      res.status(500).json({ error: "Failed to fetch latest video" });
   }
});

app.listen(3000, () => {
   console.log("Server is running on port 3000");
});
