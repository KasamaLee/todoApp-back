const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController')

router.post('/create', todoController.createTask)
router.get('/read', todoController.readTask)
router.patch('/update/:id', todoController.updateTask)
router.delete('/delete/:id', todoController.deleteTask)

module.exports = router;