






const express = require('express');
const CalcRoutes = require('./routes/CalcRoutes');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use('/', express.static(path.join(__dirname, 'public')));

// Map the calculator routes to our app with the '/calculator' prefix
app.use('/calculator', CalcRoutes);

// Handle requests to the root path by sending the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

