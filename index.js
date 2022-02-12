const PORT = 8000
import express from "express"

import esportsService from "./service/esports_service.js"

const app = express()

app.listen(PORT, () => console.log(`server running on port ${PORT}`))

app.get("/", (req, res) => res.json("Gonna be a LOL Esports API soon :)"))

app.get(`/kek`, (req, res) => esportsService.hujeta(req, res))