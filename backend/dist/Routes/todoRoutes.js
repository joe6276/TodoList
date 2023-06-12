"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todoContollers_1 = require("../Controllers/todoContollers");
const todoRouter = (0, express_1.Router)();
todoRouter.get('', todoContollers_1.getAllTodos);
todoRouter.post('', todoContollers_1.addTodo);
todoRouter.get('/:id', todoContollers_1.getaTodo);
// router.put('/:id',updateTodo)
// router.delete('/:id',deleteTodo)
exports.default = todoRouter;
