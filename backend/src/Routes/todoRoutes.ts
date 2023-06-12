
import { Router } from "express";
import { addTodo, getAllTodos, getaTodo } from "../Controllers/todoContollers";
const todoRouter = Router()

todoRouter.get('',getAllTodos)
todoRouter.post('',addTodo)
todoRouter.get('/:id',getaTodo)
// router.put('/:id',updateTodo)
// router.delete('/:id',deleteTodo)

export default todoRouter