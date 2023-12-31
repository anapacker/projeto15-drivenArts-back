import express from "express";
import cors from "cors"
import dotenv from "dotenv"

const app = express()
app.use(express.json())
app.use(cors)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Servidor rodado na porta ${port}`))