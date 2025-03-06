const express = require('express');
const apiRoutes = require('./routes');

const {ServerConfig} = require('./config/index.js');

const app = express();

app.use('/api', apiRoutes);sdfasd

app.listen(ServerConfig.PORT, (req, res) => {
    console.log(`Server running on port ${ServerConfig.PORT}`);
})

