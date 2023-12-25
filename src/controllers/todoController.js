const prisma = require('../models/prisma')

exports.createTask = async (req, res, next) => {
    try {
        const { text } = req.body;
        // console.log(reqBody)

        const result = await prisma.task.create({
            data: {
                text: text
            }
        })

        res.status(200).json({ result })

    } catch (err) {
        console.log(err)
        next(err)

    }
}