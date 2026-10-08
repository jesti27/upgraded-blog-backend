const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        service: "node"
    });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Node.js API running on port 3000");
});
