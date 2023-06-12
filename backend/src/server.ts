import express, { json } from 'express'
import todoRouter from './Routes/todoRoutes'

const app= express()
app.use(json())

app.use('/todo', todoRouter)
app.listen(4000, ()=>{
    console.log("Server Running...");
    
})