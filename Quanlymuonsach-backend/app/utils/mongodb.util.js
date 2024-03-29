// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1/contact_book');

// const Schema = mongoose.Schema;

// const Account = new Schema({
//     username: String,
//     password: String,
// }, {
//     collection: "NhaXuatBan"
// });

// const AccountModel = mongoose.model('NhaXuatBan', Account);




// AccountModel.find({})
//     .then(function (data) {
//         console.log("Error ", data);
//     })
//     .catch(function (err) {
//         console.log("Error ", err);
//     })



const { MongoClient } = require("mongodb");

class mongoDB {
    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri);
        return this.client;
    };
}

module.exports = mongoDB;