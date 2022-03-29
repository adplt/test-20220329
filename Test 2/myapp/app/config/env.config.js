const env = process.env.NODE_ENV;

const dev = {
    app: {
        host: process.env.DEV_APP_HOST,
        port: process.env.DEV_APP_PORT,
    },
    db1: {
        host: process.env.DEV_DB_HOST,
        port: process.env.DEV_DB_PORT,
        user: process.env.DEV_DB_USER,
        pass: process.env.DEV_DB_PASS,
        name: process.env.DEV_DB_NAME,
    },
}

// for CI / CD purpose
const test = {
    app: {
        host: process.env.TEST_APP_HOST,
        port: process.env.TEST_APP_PORT,
    },
    db1: {
        host: process.env.TEST_DB_HOST,
        port: process.env.TEST_DB_PORT,
        user: process.env.TEST_DB_USER,
        pass: process.env.TEST_DB_PASS,
        name: process.env.TEST_DB_NAME,
    },
}

const prod = {
    app: {
        host: process.env.PROD_APP_HOST,
        port: process.env.PROD_APP_PORT,
    },
    db1: {
        host: process.env.PROD_DB_HOST,
        port: process.env.PROD_DB_PORT,
        user: process.env.PROD_DB_USER,
        pass: process.env.PROD_DB_PASS,
        name: process.env.PROD_DB_NAME,
    },
}

const config = {
    dev,
    test,
    prod,
}

module.exports = config[env];