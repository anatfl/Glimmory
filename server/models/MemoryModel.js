const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Memory', memorySchema, 'mockData');