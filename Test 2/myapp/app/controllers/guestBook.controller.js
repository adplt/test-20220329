const tmUserQuery = require('../queries/tmUser.query');
const tmWeddingQuery = require('../queries/tmWedding.query');
const txWeddingGuestBookQuery = require('../queries/txWeddingGuestBook.query');
const { isEmpty } = require('lodash');
const commonVariable = require('../variables/common.variable');
const { addCreatedAttribute } = require('../utils/transformer.util');

function addGuestBook(req, res) {
    try {
        const { name, address, phone, note, weddingId, userId } = req.body;

        // validate user
        const user = tmUserQuery.findByPk(userId, { status_id: commonVariable.COMMON__ACTIVE });
        if (isEmpty(user)) {
            throw new Error('User not found');
        }

        // validate wedding data
        const wedding = tmWeddingQuery.findByPk(weddingId, { status_id: commonVariable.COMMON__ACTIVE });
        if (isEmpty(wedding)) {
            throw new Error('Wedding not found');
        }

        // save the guest book
        const result = txWeddingGuestBookQuery.save({
            ...req.body,
            ...addCreatedAttribute(req.body),
        });

        res.status(200).json({
            data: result,
            message: 'Add guestbook successfully',
            status: 'SUCCESS',
        });
    } catch (error) {
        res.status(500).json({
            data: null,
            message: error.message,
            status: 'ERROR',
        });
    }
}

function showGuestBookList(req, res) {
    try {
        const { weddingId, userId } = req.body;

        // validate user
        const user = tmUserQuery.findOne({
            where: {
                [Op.and]: {
                    user_id: userId,
                    status_id: commonVariable.USER__ACTIVE,
                },
            },
        });
        if (isEmpty(user)) {
            throw new Error('User not found');
        }

        // get the guest book list by wedding ID
        const weddingList = txWeddingGuestBookQuery.find({
            where: {
                [Op.and]: {
                    wedding_id: weddingId,
                    status_id: commonVariable.COMMON__ACTIVE,
                }
            }
        });

        res.status(200).json({
            data: weddingList,
            message: 'Show guestbook successfully',
            status: 'SUCCESS',
        });
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
