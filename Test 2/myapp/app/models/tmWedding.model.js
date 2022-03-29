const { db1 } = require('./index');
const tableName = require('../variables/tableName.variable');
const Sequelize = require('sequelize');
const uuidv4 = require('uuid/v4');

module.exports = db1.define(tableName.TX_WEDDING_GUESTBOOK, {
    wedding_id: {
        type: Sequelize.UUID,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        primaryKey: true,
        defaultValue: uuidv4(),
    },
    wedding_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    wedding_address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    wedding_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    status_id: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
        defaultValue: commonVariable.COMMON_ACTIVE,
    },
    created_by: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    created_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    created_from: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    modified_by: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
    modified_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
    modified_from: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            notEmpty: false,
        },
    },
});