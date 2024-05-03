const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: {type: Number, required: true},
    description: { type: String }, // Make description optional
    datetime: { type: Date } // Make datetime optional
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
