import express from 'express';
import 'reflect-metadata';
import './database';
import { routes } from './routes';

const app = express();

app.use(express.json())

app.use(routes);



app.listen(3333,()=>{
    console.log("Server started in localhost:3333");
});
