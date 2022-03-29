const moment = require('moment');

function addCreatedAttribute(body = {}) {
    return {
        created_by: body.userId,
        created_date: moment.tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss'),
        created_from: body.source,
    }
}

function addModifiedAttribute(body = {}) {
    return {
        modified_by: body.userId,
        modified_date: moment.tz('Asia/Jakarta').format('YYYY-MM-DD HH:mm:ss'),
        modified_from: body.source,
    }
}

module.exports = {
    addCreatedAttribute,
    addModifiedAttribute
}