import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRouter from './route/web';
import connetDB from "./config/connectDB";
require('dotenv').config();
let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouter(app);
connetDB();


let port = process.env.PORT || 1234;
//Port == undefined => port = 1234
app.listen(port, () => {
    console.log("Backend nodejs is running on the port:" + port)
})
