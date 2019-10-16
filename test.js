const mongoose=require('mongoose')


const User=require('./database/models/User')

mongoose.connect('mongodb://localhost/node2-js-blog', { useNewUrlParser: true });

User.create({
    username: 'sunanda',

    email: 'abc@mail.com',

    password: '123'


},(error,user)=>{
    console.log(error,post)
})
