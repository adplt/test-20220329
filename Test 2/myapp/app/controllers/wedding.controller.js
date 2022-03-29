const commonVariable = require('../variables/common.variable');
const { addCreatedAttribute } = require('../utils/transformer.util');

function addWedding(req, res) {
    try {
        const { name, address, date, userId } = req.body;

        // validate user
        const user = tmUserQuery.findByPk(userId, { where: { user_role: commonVariable.USER_ROLE__ADMIN } });
        if (isEmpty(user)) {
            throw new Error('User not found');
        }

        // validate wedding data
        const wedding = tmWeddingQuery.findOne({
            where: {
                [Op.and]: {
                    name,
                    address,
                    date,
                }
            },
        });
        if (!isEmpty(wedding)) {
            throw new Error('Wedding already exist');
        }

        // save the wedding
        const result = tmWeddingQuery.save({
            ...req.body,
            ...addCreatedAttribute(req.body),
        });

        res.status(200).json({
            data: result,
            message: 'Add wedding successfully',
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

function showWeddingList(req, res) {
    try {
        const { userId } = req.body;

        // get the guest book list by wedding ID
        const weddingList = tmWeddingQuery.find({
            where: {
                [Op.and]: {
                    user_id: userId,
                    status_id: commonVariable.COMMON__ACTIVE,
                }
            }
        });

        res.status(200).json({
            data: weddingList,
            message: 'Show wedding successfully',
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
    addWedding,
    showWeddingList,
}
