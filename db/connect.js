const mongoose = require('mongoose')
const connectionString = 
    'mongodb+srv://ilgar:YiL1IFydmu8IHYDk@cluster0.sjq9pwr.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority'


const connectDB = (url) => {

    return mongoose
    .connect(url)
    .then(()=>console.log('CONNECTED TO THE DB..'))
    .catch((err) => console.log(err))

}

module.exports = connectDB