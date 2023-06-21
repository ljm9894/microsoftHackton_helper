const express = require('express');
const morgan = require('morgan');
const router = require('./router');
const app = express();
require('dotenv').config();
const port = process.env.PORT;


if(process.env.NODE_ENV === 'production'){
    app.use(morgan('combined'));
}else{
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({extended : false}));

/*app.use((req,res,next) => {
    const error = new Error(`Server가 없습니다.`);
    error.status = 404;
    next(error);
})*/

app.use('/', router);

app.listen(port, ()=>{
    console.log(`${port}포트 연결`);
})