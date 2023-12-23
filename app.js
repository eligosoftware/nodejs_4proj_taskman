const express = require('express')
const tasks = require('./routes/tasks')
const app = express();

app.get('/hello', (req,res) => {
    res.send("Hello world")
});

app.use('/api/v1/tasks',tasks)
const PORT = 3000;
app.listen(port = PORT, console.log(`Server is listening on port ${port}...`))