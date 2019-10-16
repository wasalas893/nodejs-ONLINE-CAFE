const path=require('path')

const expressEdge=require('express-edge')

const mongoose=require('mongoose')

const bodyParser=require('body-parser')

const fileUpload=require('express-fileupload')

const User=require('./database/models/User')


const express= require('express')

mongoose.connect('mongodb://localhost/node2-js-blog', { useNewUrlParser: true });




const app=new express()

app.use(fileUpload())



app.use(express.static('public'))

app.use(expressEdge)

//edge hadanna 
app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())



app.use(bodyParser.urlencoded({extended:true}))











//database data insert kirima

app.post('/user/register',(req,res)=>{



User.create(req.body,(error,user)=>{

    res.redirect('/')

})
  
})



//index
app.get('/',(req,res)=>{

    res.render('index')
})
//about
app.get('/about',(req,res)=>{

    res.render('about')
})

//products
app.get('/products',(req,res)=>{

    res.render('products')
})
//strore
app.get('/store',async(req,res)=>{
    
//data ganna ake
    const posts=await User.find({

    })

    res.render('store', { posts})
})
//register
app.get('/user/register',(req,res)=>{

    res.render('register')
})





app.listen(5000, ()=>{
    console.log('App listenig on port 5000')
})