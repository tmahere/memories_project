import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import MONGO_URI from './keys.js';


const app = express();

app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({"limit": "30mb", extended:true}));

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI)
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log("error connecting to database", err))