import express from 'express'

const server=express.Router()

server.route('/msg').get((req, res)=>{

    return res.status(200).send('olá ecma6')

})

export default server
