import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import MONGO_URI from './keys.js';
import postRoutes from './routes/posts.js';




const app = express();




app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({"limit": "30mb", extended:true}));
app.use(cors()); // this comes before specifying routes

app.use('/posts', postRoutes); // every route inside the "postRoutes" is gonna start with post -- use routes js code to create a route for a given path -- define that path with express middlewear as shown here 

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI)
    .then(()=> app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log("error connecting to database", err))