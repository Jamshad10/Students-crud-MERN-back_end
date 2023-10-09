const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT;

//middlewares
app.use(express.json());
app.use(cors());

//MongoDB database connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
)

const db = mongoose.connection;
db.on('error', (error) => {
    console.log(error);
});
db.once('open', () => {
    console.log("Connected to MongoDB");
});

//route prefix
app.use('/',require('./src/routes/user/userRoute'))

//server connection
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});