var txWeddingGuestBook = require('../models/txWeddingGuestBook.model');

const attributes = ['wedding_book_id', 'wedding_id', 'guest_name', 'guest_address', 'guest_phone', 'guest_note',
    'status_id', 'created_by', 'created_date', 'created_from', 'modified_by', 'modified_date', 'modified_from'];

// all trx param should be the first params (trx used for using transaction on SQL)

function findByPk(trx, primaryKey, params) {
    return txWeddingGuestBook.findByPk(primaryKey, { attributes, ...params, raw: true }, trx); // raw true used for return data object into JSON.
}

function save(trx, data) {
    return txWeddingGuestBook.create(data, trx); // raw true used for return data object into JSON.
}

function findOne(trx, params) {
    return txWeddingGuestBook.findOne({ attributes, ...params, raw: true }, trx);
}

function findAll(trx, params) {
    return txWeddingGuestBook.find({ attributes, ...params, raw: true }, trx);
}

function count(trx, params) {
    return txWeddingGuestBook.count({ col: 'wedding_book_id', ...params, raw: true }, trx);
}

function remove(trx, params) {
    return txWeddingGuestBook.destroy({ ...params, returning: true, raw: true }, trx);
}

function update(trx, data, params) {
    return txWeddingGuestBook.update(data, { attributes, ...params, returning: true, raw: true }, trx);
}

function findAndCountAll(trx, params) {
    return txWeddingGuestBook.update({ attributes, ...params, returning: true, raw: true }, trx);
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