const express = require("express")
const cors = require('cors')
require('dotenv').config();

const cookieParser = require('cookie-parser');


//SERVIDOR

const app=express();

//COOKIES
app.use(cookieParser());
//PUERTO
const port = 3000





//CORS
app.use(cors())

//parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

//parse application/json
app.use(express.json())

//RUTAS
app.use("/", require("./routes/logRoute"));

//ESCUCHA SERVIDOR
app.listen(port, ()=>{
    console.log(`Servidor a la escucha del puerto ${port}`)

});

