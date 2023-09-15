const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

// app.post('/createUser',(req,res)=>{
//     UserModel.create(req.body)
//     .then(users => res.json(users))
//    .catch(err=>res.json(err))
// })


app.post('/createUser', (req, res) => {
    UserModel.create(req.body)
        .then(user => {
            // Devuelve el usuario creado como respuesta en formato JSON
            res.json(user);
        })
        .catch(err => {
            // Devuelve cualquier error que ocurra como respuesta en formato JSON
            res.status(500).json(err);
        });
});

app.listen(3001, ()=>{
    console.log('Server is running')
})
