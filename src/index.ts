import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

const app= express();

app.use(cors(
    {credentials:true,}
));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
const server = http.createServer(app);

server.listen(8080,()=>{
    console.log('Server is running on http://localhost:8080');
});

const mongo_url ='mongodb+srv://cherinet695:1590miti@cluster0.vhvvnmm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'   

mongoose.Promise=Promise;
mongoose.connect(mongo_url);

mongoose.connection.on('error',(error:Error)=>console.log(error));