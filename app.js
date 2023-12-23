const express = require('express')
const tasks = require('./routes/tasks')


const connectDB = require('./db/connect')
require('dotenv').config()
const app = express();

app.get('/hello', (req,res) => {
    res.send("Hello world")
});

//middleware
app.use(express.json())

// routes
app.use('/api/v1/tasks',tasks)
const PORT = 3000;

const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port = PORT, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()