const express = require('express');
const cors = require('cors')
const receiptRoute = require('./src/routes/DcgRoutes');

// Instantiating express server
const app = express();

// Adding Cross-Origin middleware
app.use(cors());

// Adding express json middleware for accessing request as JSON
app.use(express.json());

app.use("/api/v1", receiptRoute);

module.exports = app;