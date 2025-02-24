const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
	res.json({ message: "API server sounds good"})
});

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`); 
});