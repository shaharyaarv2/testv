const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    MemberName: String,
    username: String,
    password: String,
    isAdmin: { type: Boolean, default: false }, // Added isAdmin with default value
    P: Number,
    A: Number,
    L: Number,
    M: Number,
    S: Number,
    RGI: Number,
    RGO: Number,
    RRI: Number,
    RRO: Number,
    V: Number,
    "1-2-1": Number,
    TYFCB: Number,
    CEU: Number,
    T: Number
});

module.exports = mongoose.model('members', memberSchema);