const express = require('express')
const dotenv = require('dotenv')
dotenv.config()

const cfg = require('./config')
const app = express()

require('./mqtt')

app.listen(cfg.PORT, () => console.log(`Running at http://localhost:${cfg.PORT}`))