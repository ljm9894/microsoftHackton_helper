const express = require('express');
const morgan = require('morgan');
const app = express();
require('dotenv').config();
const port = process.env.PORT;


if(process.env.NODE_ENV === 'production'){
    app.use(morgan('combined'));
}else{
    app.use(morgan('dev'));
}



app.listen(port, ()=>{
    console.log('8080포트 연결');
})