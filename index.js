import server from './routes/'
import logger from 'morgan'
import express from 'express'

const app=express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use('/', server)

app.listen(54235)