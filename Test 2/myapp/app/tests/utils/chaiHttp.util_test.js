const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server.util_test');

chai.should();
chai.use(chaiHttp);

const url = `http://${config.app.host}:${config.app.port}`;

function GET(path) {
    return chai.request(server).get(url + `/${path}`);
}

function POST(path, data) {
    return chai.request(server).post(url + `/${path}`).send(data);
}

function PUT() {
    return chai.request(server).put(url + `/${path}`).send(data);
}

function DELETE() {
    return chai.request(server).delete(url + `/${path}`).send(data);
}

module.exports = {
    GET,
    POST,
    PUT,
    DELETE,
}