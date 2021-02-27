import express from 'express';
import 'reflect-metadata';

const app = express();
import './database';

app.get('/', (request, response)=>{
    response.json({message: 'Hello NLW04'});
});

app.listen(3333,()=>{
    console.log("Server started in localhost:3333");
});
