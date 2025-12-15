const express = require("express");
const app = express();

let latestCode = "";

app.get("/latestcode", (req, res) => {
    if (req.query.code) {
        latestCode = req.query.code;
        console.log("New code received:", latestCode);
    }

    res.json({ code: latestCode });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("API running on port", PORT);
});
