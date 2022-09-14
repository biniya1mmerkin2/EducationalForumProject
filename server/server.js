import mongoose from 'mongoose'
import express from 'express'
import card from './models/userCard.js'
import Cors from 'cors'

//App Config
const app=express();
const port=process.env.PORT || 8001
const connection_Url='mongodb+srv://wanofi:nw8xRT8Vktu4HTHB@cluster0.dgnuozn.mongodb.net/dbcard?retryWrites=true&w=majority'

//MidleWare config

app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(connection_Url)

//API Endpoint
app.get('/',(req,res)=>res.status(200).send('EEF server'))

app.post('/members/card',(req,res)=>{
    const users=req.body

    card.create(users,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/members/card',(req,res)=>{
    card.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})


//Listner
app.listen(port,()=>console.log(`Listening at localhost: ${port}`))
