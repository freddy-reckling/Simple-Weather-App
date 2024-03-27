const express = require('express');
const app = express();
const port = 3000;

// Serve your HTML file directly
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
