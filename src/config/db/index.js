const mongoose = require('mongoose');

const uri = "mongodb+srv://sa:123@cluster0.841a5.mongodb.net/ChatApp?retryWrites=true&w=majority";
async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }, () => {
            console.log("Connection mongoDB successfully");
        });
    } catch (error) {
        console.log('Connection mongoDB failed');
    }
}

module.exports = { connect };
