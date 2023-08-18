const express=require('express');
const { getToDo, saveToDo, updatetodo, deletetodo } = require('../controller/controller');

const router =express.Router()

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updatetodo)
router.post('/delete',deletetodo)

module.exports=router;