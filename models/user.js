//for creating schema we need to import mongoose
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true //this keeps track of the updates and creation of users. Managed by mongoose just use this peice of line

});

const User = mongoose.model('User',userSchema);

//exporting
module.exports = User;