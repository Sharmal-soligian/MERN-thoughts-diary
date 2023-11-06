const mongoose = require('mongoose');
const mongoDB_URL = process.env.MONGO_URI;

// Connect to database
mongoose.connect(mongoDB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => console.log('Connected to Database'));
mongoose.connection.on('error', (err) => console.log('Error connecting database ' + err));