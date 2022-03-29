const app = require('../../../app');
const config = require('../../config/env.config');

const port = normalizePort(config.app.PORT);
app.set('port', port);

const server = http.createServer(app);

module.exports = server;