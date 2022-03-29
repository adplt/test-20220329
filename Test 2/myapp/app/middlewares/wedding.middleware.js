
function addWedding(req, res, next) {
    try {
        const schema = Joi.object().keys({
            name: Joi.string().required(),
            address: Joi.string().required(),
            date: Joi.date().required(),
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

function showWeddingList(req, res, next) {
    try {
        const schema = Joi.object().keys({
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
    addWedding,
    showWeddingList,
}