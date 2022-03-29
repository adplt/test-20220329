var tmUser = require('../models/tmUser.model');

const attributes = ['user_id', 'username', 'password', 'user_role',
    'status_id', 'created_by', 'created_date', 'created_from', 'modified_by', 'modified_date', 'modified_from'];

// all trx param should be the first params (trx used for using transaction on SQL)

function findByPk(trx, primaryKey, params) {
    return tmUser.findByPk(primaryKey, { attributes, ...params, raw: true }, trx); // raw true used for return data object into JSON.
}

function save(trx, data) {
    return tmUser.create(data, trx); // raw true used for return data object into JSON.
}

function findOne(trx, params) {
    return tmUser.findOne({ attributes, ...params, raw: true }, trx);
}

function findAll(trx, params) {
    return tmUser.find({ attributes, ...params, raw: true }, trx);
}

function count(trx, params) {
    return tmUser.count({ col: 'user_id', ...params, raw: true }, trx);
}

function remove(trx, params) {
    return tmUser.destroy({ ...params, returning: true, raw: true }, trx);
}

function update(trx, data, params) {
    return tmUser.update(data, { attributes, ...params, returning: true, raw: true }, trx);
}

function findAndCountAll(trx, params) {
    return tmUser.update({ attributes, ...params, returning: true, raw: true }, trx);
}

module.exports = {
    findByPk,
    save,
    findOne,
    findAll,
    count,
    remove,
    update,
    findAndCountAll,
}