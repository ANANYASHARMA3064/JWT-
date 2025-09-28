require('dotenv').config()
const express =require('express')
const app =express()
const jwt= require('jsonwebtoken')
app.use(express.json()) 
let refreshTokens = []
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
app.get('/posts',authenticateToken, (req,res)=>{
    res.json(posts.filter(post=>post.username===req.user.name))
})
app.get('/login ',(req,res)=>{
    res.json(posts)
})
app.post('/token',(req,res)=>{
    const refreshToken = req.body.token;
})
app.post('/login',(req,res)=>{
    const username =req.body.username 
    const user = {name: username }
   const accessToken= generateAccessToken(user)
   const refreshToken  = jwt.sign(user,process.env.REFRESH_TOKEN_SECRET)
   refreshTokens.push(refreshToken)
   res.json({accessToken:accessToken })
}) 
function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'15s'})
}
app.listen(8000)
