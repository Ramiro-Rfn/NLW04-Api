import express from 'express';

const app = express();

app.get('/', (request, response)=>{
    response.json({message: 'Hello NLW04'});
});

app.listen(3434,()=>{
    console.log("Server started in localhost:3434");
});
