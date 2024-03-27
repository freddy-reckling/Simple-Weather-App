const express = require('express');
const app = express();
const port = 3000; // Choose any available port


app.use(express.static('simple-weather-app'));


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

