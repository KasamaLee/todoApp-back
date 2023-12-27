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

exports.readTask = async (req, res, next) => {
    try {
        const allTask = await prisma.task.findMany()
        res.status(200).json({ allTask })
    } catch (err) {
        console.log(err)
        next(err)
    }
}

exports.updateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { text } = req.body;

        const updatedTask = await prisma.task.update({
            where: {
                id: +id
            },
            data: {
                text: text
            }
        })

        res.status(200).json({ updatedTask })
    } catch (err) {
        console.log(err)
        next(err)
    }
}

exports.deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;

        const deletedTask = await prisma.task.delete({
            where: {
                id: +id
            }
        })
        res.status(200).json({ deletedTask })
    } catch (err) {
        console.log(err)
        next(err)
    }
}

exports.updateTaskStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id)
    } catch (err) {
        console.log(err)
        next(err)
    }
}