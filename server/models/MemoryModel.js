const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Memory', memorySchema, 'mockData');