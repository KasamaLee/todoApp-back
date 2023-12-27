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
        const { updatedText } = req.body;
        console.log(updatedText)

        const updatedTask = await prisma.task.update({
            where: {
                id: +id
            },
            data: {
                text: updatedText
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
        const { status } = req.body;
        // console.log(status)

        const updatedTask = await prisma.task.update({
            where: {
                id: +id
            },
            data: {
                completed: status
            }
        })
        res.status(200).json({ updatedTask })
    } catch (err) {
        console.log(err)
        next(err)
    }
}