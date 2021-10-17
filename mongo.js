const mongoose = require('mongoose');
const uri = "mongodb+srv://sa:123@cluster0.841a5.mongodb.net/ChatApp?retryWrites=true&w=majority";
async function connectionMongo() {
    return new Promise(async (resolve,reject) => {
        var connect = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });
        if (connect != undefined) {
            resolve(connect.connection);
        }
        reject("Connection MongoDB failed");
    });
}
module.exports = connectionMongo();