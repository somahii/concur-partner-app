const express = require('express');
const {testingApi} = require('../handler/DcgHandler');

const receiptRouter = express();

receiptRouter.route('/health').get(testingApi);

module.exports = receiptRouter;