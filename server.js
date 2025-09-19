const express =require('express')
const app =express()
const jwt= require('jsonwebtoken')
app.use(express.json()) 
const posts =[
    {
        username:'kyle',
        title:'post 1'
    }, 
    {
        username:'kyle',
        title:'post 2'
    }
]
app.get('/posts',(req,res)=>{
    res.json(posts)
})
app.get('/login ',(req,res)=>{
    res.json(posts)
})
app.post('/login',(req,res)=>{
    const username =req.body.username
    const user = {name: username }
    jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
}) 
app.listen(8090)
why 