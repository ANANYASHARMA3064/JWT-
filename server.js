const express =require('express')
const app =express()
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
app.listen(8090)