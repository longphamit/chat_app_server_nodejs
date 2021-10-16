const mongoose = require('mongoose');
const uri = "mongodb+srv://sa:123@cluster0.841a5.mongodb.net/ChatApp?retryWrites=true&w=majority";
async function connectionMongo() {
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
}

module.exports = connectionMongo();