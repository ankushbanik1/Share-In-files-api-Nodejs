const express=require('express');
const app=express()
const path =require('path')
const PORT=process.env.PORT || 3000;

const connectDB=require('./config/db')

app.listen(PORT,()=>{
    console.log(`listing on port ${PORT}`)
})
connectDB()
app.use(express.json())

app.use(express.static('public'))
app.set('views',path.join(__dirname,'/views'))
app.set('view engine','ejs')
app.use('/api/files',require('./routes/router'))
 app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'))