// app.js
const express = require('express');
const app = express();
const port = 3000;

// Endpoint for generating load
app.get('/', (req, res) => {
    const start = Date.now();
    while (Date.now() - start < 1000) {} // Busy-wait for 1 second
    res.send('Load generated for 1 second!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
