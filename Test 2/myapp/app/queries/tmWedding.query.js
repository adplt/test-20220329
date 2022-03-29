var tmWedding = require('../models/tmWedding.model');

const attributes = ['wedding_id', 'wedding_name', 'wedding_address', 'wedding_date',
    'status_id', 'created_by', 'created_date', 'created_from', 'modified_by', 'modified_date', 'modified_from'];

// all trx param should be the first params (trx used for using transaction on SQL)

function findByPk(trx, primaryKey, params) {
    return tmWedding.findByPk(primaryKey, { attributes, ...params, raw: true }, trx); // raw true used for return data object into JSON.
}

function save(trx, data) {
    return tmWedding.create(data, trx); // raw true used for return data object into JSON.
}

function findOne(trx, params) {
    return tmWedding.findOne({ attributes, ...params, raw: true }, trx);
}

function findAll(trx, params) {
    return tmWedding.find({ attributes, ...params, raw: true }, trx);
}

function count(trx, params) {
    return tmWedding.count({ col: 'wedding_id', ...params, raw: true }, trx);
}

function remove(trx, params) {
    return tmWedding.destroy({ ...params, returning: true, raw: true }, trx);
}

function update(trx, data, params) {
    return tmWedding.update(data, { attributes, ...params, returning: true, raw: true }, trx);
}

function findAndCountAll(trx, params) {
    return tmWedding.update({ attributes, ...params, returning: true, raw: true }, trx);
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