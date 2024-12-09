const express = require('express');
const app = express();
const port = 3000;

// app.get('/test', (req, res) => {
//     res.send('Hello World!');
// });
//
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});