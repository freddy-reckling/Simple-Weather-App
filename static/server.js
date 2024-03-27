const express = require('express');
const app = express();
const port = 3000; // Choose any available port


app.use(express.static('static'));


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

