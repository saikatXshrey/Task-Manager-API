const express = require('express');
const app = express();
const notFound = require('./middleware/not-found');
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

const port = process.env.PORT || 3000;

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,
            console.log(`server listening to port ${port}...`)
        )
    } catch (error) {
        console.log(error);
    }
}

start();