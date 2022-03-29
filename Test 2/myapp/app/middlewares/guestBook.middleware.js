const Joi = require('joi');

// using lodash because want to using advance native function
// for example: isEmpty lodash function: able to check empty object event the value are [] or {}
// whereas value [] or {} if we check via native Javascrip function, it wouldn't be empty detected.
const { isEmpty } = require('lodash');


function addGuestBook(req, res, next) {
    try {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            address: Joi.string().required(),
            phone: Joi.string().required(),
            note: Joi.string().required(),
            weddingId: Joi.string().guid().required(),
            userId: Joi.string().guid(),
            source: Joi.string().required(),
        });
        
        const result = Joi.validate({ ...req.body }, schema);

        if (isEmpty(result.error)) {
            next();
        } else {
            res.status(400).json({
                data: null,
                message: error.message,
                status: 'ERROR',
            });
        }
    } catch (error) {
        res.status(500).json({
            data: null,
            message: error.message,
            status: 'ERROR',
        });
    }
}

function showGuestBookList(req, res, next) {
    try {
        const schema = Joi.object().keys({
            weddingId: Joi.string().guid().required(),
            userId: Joi.string().guid().required(),
            source: Joi.string().required(),
        });

        const result = Joi.validate({ ...req.body }, schema);

        if (isEmpty(result.error)) {
            next();
        } else {
            res.status(400).json({
                data: null,
                message: error.message,
                status: 'ERROR',
            });
        }
    } catch (error) {
        res.status(500).json({
            data: null,
            message: error.message,
            status: 'ERROR',
        });
    }
}

module.exports = {
    addGuestBook,
    showGuestBookList,
}