import { Request,Response } from "express"
import { DatabaseHelper as DB } from "../DatabaseHelper"
import { ExtendedAddInterface, Todo } from "../Interfaces"
import {v4 as uid} from 'uuid'

export const getAllTodos = async (req:Request, res:Response)=>{

    let todos:Todo[] = await (await DB.exec('getTodos')).recordset
    res.status(200).json(todos)
}

export const getaTodo = async (req:Request<{id:string}>, res:Response)=>{
    let id =req.params.id
    let todo:Todo[] = await (await DB.exec('getTodo', {id})).recordset
    res.status(200).json(todo[0])
}



export const addTodo = async (req:ExtendedAddInterface, res:Response)=>{

     let { title, description, endDate}= req.body
     const id =uid()
     await DB.exec('insertTodos', {id,title,description,endDate})
    res.status(200).json({message:"Todo added successfully..."})
}