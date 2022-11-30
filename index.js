const express = require('express');
const mongoose = require('mongoose');
const userRouter = require("./src/routes/users.route");
require("dotenv").config();

const app = express();
const port = process.envport || 3000;


// routes
app.get('/', (req, res) => (
    res.send("Bienvenido a mi api")
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users', userRouter);

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.error(error));
    

app.listen(port, () => 
    console.log('Escuchando en', port));