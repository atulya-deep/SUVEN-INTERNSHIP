const { response } = require("express")
const express= require("express")
const app= express()
app.use(express.json())
app.use(express.static('public'))
app.get('/',(req,res)=>{
     res.sendfile('index.html')

    })
})
let username='atulya'
let password='ashdj'
app.post('/',(req,res)=>{
    console.log(req.body)
    let response=''
    if (req.body.username===username)
    {if(req.body.password===password)
        {
        response='login sucessful'
        }
      else{
        response='incorrect password'
      }  
    }
    else{
        response='user not found'
    }
    res.json(response)
})
app.put('/',(req,res)=>{
    console.log(req.body.password)
    password=req.body.password
    res.json('password change sucessful')
})
app.listen(3000,()=>{
 console.log('server is running on port 3000')
})
